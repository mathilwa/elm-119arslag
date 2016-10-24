module View exposing (..)

import Html exposing (Html, a, div, li, text, ul)
import Models exposing (Model)
import Routing exposing (Route(..))
import Messages exposing (Msg(..))

import Components.Informasjon
import Components.Hovedside
import Components.Kontakt
import Html.Attributes exposing (class, href)
import Html.Events exposing (onClick)

view : Model -> Html Msg
view model =
    div []
        [ div [ class "pure-menu pure-menu-horizontal"] [
            ul [ class "pure-menu-list"] [
                li [ class "pure-menu-item" ] [ a [ class "pure-menu-link", href "#", onClick GaTilHovedside] [ text "119årslag"] ]
                , li [ class "pure-menu-item" ] [ a [ class "pure-menu-link", href "#", onClick GaTilInformasjon ] [ text "Informasjon"] ]
                , li [ class "pure-menu-item" ] [ a [ class "pure-menu-link", href "#", onClick GaTilKontakt ] [ text "Kontakt"] ]
            ]
        ]
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
