module Components.Invitasjon exposing (..)

import Html exposing (..)
import Html.Attributes exposing (..)
import Models exposing (Model)
import Messages exposing (Msg)

invitasjonView: Model -> Html Msg
invitasjonView model =
  div [ class "information pure-g" ][
    div [ class "pure-u-1" ][
      div [ class "l-box" ][
        h3 [ class "information-head" ][ text ("Hei alle kjære venner og familie av mamma og pappa/Torunn og Trond!")]
        , p [] [ text ("Lørdag 3. juni 2017 vil vi gjerne få invitere dere til å bli med å feire at mamma og pappa fyller 60 år. Hold av datoen, så håper vi dere har tid, lyst og mulighet til å være med å gi disse fantastiske menneskene en bursdag de sent vil glemme!
                      Alle er invitert med kjæreste/ektefelle/samboer, så spre gjerne ordet videre!") ]
      ]
    ]
  ]