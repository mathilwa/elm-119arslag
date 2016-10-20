import Html exposing (..)
import Html.Attributes exposing (..)
import Html.App as Html
import Html.Events exposing ( onClick )

-- component import example
import Components.Hello exposing ( hello )

-- APP
main : Program Never
main =
  Html.beginnerProgram { model = model, view = view, update = update }


-- MODEL
type alias Model = Int

model : number
model = 0


-- UPDATE
type Msg = NoOp | Increment

update : Msg -> Model -> Model
update msg model =
  case msg of
    NoOp -> model
    Increment -> model + 1


-- VIEW
-- Html is defined as: elem [ attribs ][ children ]
-- CSS can be applied via class names or inline style attrib
view : Model -> Html Msg
view model =
  div [ class "container", style [("margin-top", "30px"), ( "text-align", "center" )] ][    -- inline CSS (literal)
      div [ class "banner" ][
        h1 [class "banner-head" ] [
        div [] [ text ("Bli med å feire.") ]
        , div [] [ text ("Torunn og Trond fyller 119 år.") ]
        ]
      ]
      , div [ class "l-content" ] [
          div [ class "information pure-g" ][
              div [ class "pure-u-1" ][
                div [ class "l-box" ][
                  h3 [ class "information-head" ][ text ("Hei alle kjære venner og familie av mamma og pappa/Torunn og Trond!")]
                  , p [] [ text ("Lørdag 3. juni 2017 vil vi gjerne få invitere dere til å bli med å feire at mamma og pappa fyller 60 år. Hold av datoen, så håper vi dere har tid, lyst og mulighet til å være med å gi disse fantastiske menneskene en bursdag de sent vil glemme!
                                  Alle er invitert med kjæreste/ektefelle/samboer, så spre gjerne ordet videre!") ]
                ]
              ]
          ]
          , div [ class "information pure-g" ][
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
      ]

  ]


-- CSS STYLES
styles : { img : List ( String, String ) }
styles =
  {
    img =
      [ ( "width", "50%" )
      , ( "border", "4px solid #337AB7")
      ]
  }
