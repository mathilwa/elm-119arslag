module Components.Pamelding.Pamelding exposing (..)

import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onClick, onInput, onSubmit)
import List exposing (length)
import Models exposing (Model)
import Messages exposing (Msg(..))
import Components.Pamelding.Model exposing (Pameldt)


pameldingView : Model -> Html Msg
pameldingView model =
    div [ class "information pure-g" ]
        [ div [ class "pure-u-1" ]
            [ div [ class "l-box" ]
                [ Html.form [ onSubmit MeldPa ]
                    [ input [ type' "text", placeholder "Navn", onInput Navn, value model.navn ] []
                    , input [ type' "mail", placeholder "E-post", onInput Epost, value model.epost ] []
                    , button [ type' "submit" ] [ text "Bli med" ]
                    ]
                ]
            , ul [ class "message-list" ] (List.map pameldte model.pameldte)
            ]
        , div [ class "pure-u-1" ] [ text ("Antall påmeldte: " ++ toString (length model.pameldte)) ]
        ]


pameldte : Pameldt -> Html msg
pameldte pameldt =
    li [ class "message" ]
        [ span [ class "message-text" ] [ text pameldt.fornavn ]
        ]

