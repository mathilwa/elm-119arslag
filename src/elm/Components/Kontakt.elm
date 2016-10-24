module Components.Kontakt exposing (..)

import Html exposing (..)
import Html.Attributes exposing (..)
import Models exposing (Model)
import Messages exposing (Msg)

kontaktView: Model -> Html Msg
kontaktView model =
   div [ class "containter" ][
      div [ class "information pure-g" ][
          div [ class "pure-u-1" ][
            div [ class "l-box" ][
              h3 [ class "information-head" ][ text ("Kontakt")]
              , p [] [ text ("Har du noen spørsmål? Ta kontakt på tlf 000 00 000 eller mail mail@mail.no") ]
            ]
          ]
      ]
   ]