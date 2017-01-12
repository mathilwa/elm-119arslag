module Components.Pamelding.Pamelding exposing (..)

import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onClick, onInput, onSubmit)
import List exposing (..)
import Models exposing (Model)
import Messages exposing (Msg(..))
import Components.Pamelding.Model exposing (Pameldt)
import Array
import Debug

pameldingView : Model -> Html Msg
pameldingView model =
    div [ class "information pure-g" ]
        [ div [ class "pure-u-1" ]
            [ div [ class "l-box" ]
                [ Html.form [ onSubmit ( MeldPa { navn = model.navn, epost = model.epost, folge = Array.toList model.folge }) ]
                    [ input [ class "pamelding-input", type' "text", placeholder "Navn", onInput Navn, value model.navn ] []
                    , input [ class "pamelding-input", type' "text", placeholder "E-post", onInput Epost, value model.epost ] []
                    , a [ onClick LeggTilFolge ] [ text "Legg til følge?" ]
                    , button [ type' "submit" ] [ text "Bli med" ]
                    , visibleIf (Array.length model.folge > 0) (folge (Debug.log "Følger: " model.folge))
                    ]
                ]
            , ul [ class "message-list" ] (List.map pameldte model.pameldte)
            ]
        , div [ class "pure-u-1" ] [ text ("Antall påmeldte: " ++ toString (length model.pameldte)) ]
        , div [ class "pure-u-1" ] [ text ("Antall følger: " ++ toString (model.antallFolge)) ]
        ]

folge : Array.Array String -> Html Msg
folge folgeListe =
    div [] (
            folgeListe
            |> Array.indexedMap (\i folge -> input [ class "pamelding-input", type' "text", placeholder "Navn på følge", onInput (OppdaterFolge i)] [])
            |> Array.toList
        )

visibleIf : Bool -> Html a -> Html a
visibleIf betingelse komponent =
    if (betingelse) then
        komponent
    else
        div [] []


pameldte : Pameldt -> Html msg
pameldte pameldt =
    li [ class "message" ]
        [ span [ class "message-text" ] [ text pameldt.navn ]
        ]

