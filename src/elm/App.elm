module App exposing (..)

import Components.Pamelding.Model exposing (Pameldt)
import Dict exposing (Dict)
import Navigation
import Models exposing (Model, initialModel)
import Messages exposing (Msg(..))
import View exposing (view)
import Routing exposing (Route)
import Http
import Task
import Json.Decode as Decode exposing ((:=))
import Json.Encode as Encode exposing (..)
import Array


init : Result String Route -> ( Model, Cmd Msg )
init result =
    let
        currentRoute =
            Routing.routeFromResult result
    in
        ( initialModel currentRoute, Http.get decodePameldte ("https://torunnogtrond.firebaseio.com/pameldte.json") |> Task.perform FetchError FetchFerdig )


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none


urlUpdate : Result String Route -> Model -> ( Model, Cmd Msg )
urlUpdate result model =
    let
        currentRoute =
            Routing.routeFromResult result
    in
        ( { model | route = currentRoute }, Cmd.none )


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        MeldPa pameldt ->
            ( { model | pameldte = pameldt :: model.pameldte, epost = "", navn = "", folge = Array.empty }, lagrePameldt pameldt )

        Navn navn ->
            ( { model | navn = navn }, Cmd.none )

        Epost epost ->
            ( { model | epost = epost }, Cmd.none )

        GaTilHovedside ->
            ( model, Navigation.newUrl "" )

        GaTilInformasjon ->
            ( model, Navigation.newUrl "#informasjon" )

        GaTilKontakt ->
            ( model, Navigation.newUrl "#kontakt" )

        LeggTilFolge ->
            ( { model | folge = Array.push "" model.folge }, Cmd.none )

        OppdaterFolge index folge ->
            ( { model | folge = Array.set index folge model.folge }, Cmd.none )

        FetchFerdig allePameldte ->
            ( { model | pameldte = allePameldte }, Cmd.none )

        FetchError error ->
            ( model, Cmd.none )

        LagreFerdig pameldt ->
            ( model, Cmd.none )

        LagreError error ->
            ( model, Cmd.none )


lagre: Pameldt -> Task.Task Http.Error Pameldt
lagre pameldt =
    let
        body =
            encodePameldt pameldt
                |> Encode.encode 0
                |> Http.string

        config =
            { verb = "POST"
            , headers = [ ( "Content-Type", "application/json" ) ]
            , url = "https://torunnogtrond.firebaseio.com/pameldte.json"
            , body = body
            }
    in
        Http.send Http.defaultSettings config
            |> Http.fromJson decodePameldt


lagrePameldt : Pameldt -> Cmd Msg
lagrePameldt pameldt =
    lagre pameldt
        |> Task.perform LagreError LagreFerdig


decodePameldte : Decode.Decoder (List Pameldt)
decodePameldte =
    Decode.dict decodePameldt
    |> Decode.map Dict.values


decodePameldt : Decode.Decoder Pameldt
decodePameldt =
    Decode.object3 Pameldt
        ("navn" := Decode.string)
        ("epost" := Decode.string)
        ("folge" := Decode.list Decode.string)


encodePameldt : Pameldt -> Encode.Value
encodePameldt pameldt =
    let
        encodetPameldt =
            [ ( "navn", Encode.string pameldt.navn )
            , ( "epost", Encode.string pameldt.epost )
            , ( "folge", Encode.list (List.map Encode.string pameldt.folge))
            ]
    in
        encodetPameldt
            |> Encode.object


main : Program Never
main =
    Navigation.program Routing.parser
        { init = init
        , subscriptions = subscriptions
        , update = update
        , urlUpdate = urlUpdate
        , view = view
        }
