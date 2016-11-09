module Components.Hovedside exposing (..)

import Html exposing (..)
import Html.Attributes exposing (..)
import Models exposing (Model)
import Messages exposing (Msg)
import Components.Invitasjon exposing (invitasjonView)
import Components.Pamelding.Pamelding exposing (pameldingView)


view : Model -> Html Msg
view model =
    div
        [ class "container" ]
        [ div [ class "banner" ]
            [ h1 [ class "banner-head" ]
                [ div [] [ text "Bli med å feire." ]
                , div [] [ text "Torunn og Trond fyller 119 år." ]
                ]
            ]
        , invitasjonView model
        , pameldingView model
        ]
