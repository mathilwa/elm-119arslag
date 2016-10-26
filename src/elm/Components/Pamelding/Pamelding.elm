module Components.Pamelding.Pamelding exposing (..)

import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onClick, onInput)
import Models exposing (Model)
import Messages exposing (Msg(..))

-- hello component
pameldingView: Model -> Html Msg
pameldingView model =
    div [class "information pure-g"][
      div [class "pure-u-1"][
        div [ class "l-box"] [
            Html.form [] [
               input [ type' "text", placeholder "Navn", onInput Navn, value model.navn] []
               , input [ type' "mail", placeholder "E-post", onInput Epost, value model.epost ] []
               , button [ onClick MeldPa ] [ text "Bli med"]
            ]
          ]
          , ul [ class "message-list" ] (List.map pameldte model.pameldte)
      ]
    ]

pameldte: String -> Html msg
pameldte pameldt =
    li [ class "message" ] [
      span [ class "message-text" ] [ text pameldt ]
    ]