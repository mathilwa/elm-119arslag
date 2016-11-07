module View exposing (..)

import Html exposing (Html, a, div, li, text, ul)
import Models exposing (Model)
import Routing exposing (Route(..))
import Messages exposing (Msg(..))

import Meny exposing (menyView)
import Components.Informasjon
import Components.Hovedside
import Components.Kontakt

view : Model -> Html Msg
view model =
    div []
        [ menyView model
        , page model ]

type MELDING = NoOp

page : Model -> Html Msg
page model =
    case model.route of
        HovedsideRoute ->
            Components.Hovedside.view model

        InformasjonRoute ->
            Components.Informasjon.informasjonView model

        KontaktRoute ->
            Components.Kontakt.kontaktView model

        NotFoundRoute ->
            notFoundView

notFoundView : Html msg
notFoundView =
    div []
        [ text "Finner ikke"
        ]
