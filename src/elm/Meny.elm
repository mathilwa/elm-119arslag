module Meny exposing (..)

import Html exposing (Html, a, div, li, text, ul)
import Models exposing (Model)
import Messages exposing (Msg(..))

import Html.Attributes exposing (class, href)
import Html.Events exposing (onClick)

menyView : Model -> Html Msg
menyView model =
    div [ class "pure-menu pure-menu-horizontal"] [
        ul [ class "pure-menu-list"] [
            li [ class "pure-menu-item" ] [ a [ class "pure-menu-link", href "/#", onClick GaTilHovedside] [ text "119årslag"] ]
            , li [ class "pure-menu-item" ] [ a [ class "pure-menu-link", href "/#informasjon", onClick GaTilInformasjon ] [ text "Informasjon"] ]
            , li [ class "pure-menu-item" ] [ a [ class "pure-menu-link", href "/#kontakt", onClick GaTilKontakt ] [ text "Kontakt"] ]
        ]
    ]
