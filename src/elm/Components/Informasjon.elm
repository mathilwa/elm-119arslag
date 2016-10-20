module Components.Informasjon exposing (..)

import Html exposing (..)
import Html.Attributes exposing (..)

-- hello component
informasjon: model -> Html a
informasjon model =
  div [ class "information pure-g" ][
      div [ class "pure-u-1-3" ][
        div [ class "l-box" ][
          h3 [ class "information-head" ][ text ("Påmelding")]
          , p [] [ text ("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamco laboris nisi ut aliquip ex ea commodo
                                              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.") ]
        ]
      ]
      , div [ class "pure-u-1-3" ][
          div [ class "l-box" ][
             h3 [ class "information-head" ][ text ("Festen")]
             , p [] [ text ("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamco laboris nisi ut aliquip ex ea commodo
                                                  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.") ]
          ]
      ]
      , div [ class "pure-u-1-3" ][
          div [ class "l-box" ][
            h3 [ class "information-head" ][ text ("Overnatting")]
            , p [] [ text ("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamco laboris nisi ut aliquip ex ea commodo
                                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.") ]
          ]
      ]
  ]
