module App exposing (..)

import Components.Pamelding.Model exposing (Pameldt)
import Dict exposing (Dict)
import Navigation
import Models exposing (Model, initialModel)
import Messages exposing (Msg(..))
import View exposing (view)
import Routing exposing (Route)
import String exposing (append)
import Http
import Task
import Json.Decode as Json exposing ((:=))


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
        MeldPa ->
            ( { model | pameldte = { fornavn = model.navn, etternavn = "etternavn", epost = model.epost } :: model.pameldte, navn = "", epost = "" }, Cmd.none )

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

        FetchFerdig allePameldte ->
            ( { model | pameldte = allePameldte }, Cmd.none )

        FetchError error ->
            ( model, Cmd.none )


decodePameldte : Json.Decoder (List Pameldt)
decodePameldte =
    Json.dict decodePameldt
    |> Json.map Dict.values


decodePameldt : Json.Decoder Pameldt
decodePameldt =
    Json.object3 Pameldt
        ("fornavn" := Json.string)
        ("etternavn" := Json.string)
        ("epost" := Json.string)


main : Program Never
main =
    Navigation.program Routing.parser
        { init = init
        , subscriptions = subscriptions
        , update = update
        , urlUpdate = urlUpdate
        , view = view
        }
