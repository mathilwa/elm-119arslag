module App exposing (..)

import Navigation
import Models exposing (Model, initialModel)
import Messages exposing (Msg(..))
import View exposing (view)

import Routing exposing (Route)
import String exposing (append, concat)

init : Result String Route -> ( Model, Cmd Msg )
init result =
    let
        currentRoute =
            Routing.routeFromResult result
    in
        ( initialModel currentRoute, Cmd.none)


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none


urlUpdate : Result String Route -> Model -> ( Model, Cmd Msg )
urlUpdate result model =
    let
        currentRoute =
            Routing.routeFromResult result
    in
        ( { model | route = currentRoute }, Cmd.none)


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
  case msg of
    MeldPa ->
        ( { model | pameldte = (concat [model.navn, " ", model.epost]) :: model.pameldte, navn = "", epost = "" }, Cmd.none )

    Navn navn ->
        ( { model | navn = navn }, Cmd.none )

    Epost epost ->
        ( { model | epost = epost }, Cmd.none )

    GaTilHovedside ->
        ( model, Navigation.newUrl "")

    GaTilInformasjon ->
            ( model, Navigation.newUrl "#informasjon")

    GaTilKontakt ->
                ( model, Navigation.newUrl "#kontakt")

main : Program Never
main =
    Navigation.program Routing.parser
        { init = init
        , subscriptions = subscriptions
        , update = update
        , urlUpdate = urlUpdate
        , view = view
        }