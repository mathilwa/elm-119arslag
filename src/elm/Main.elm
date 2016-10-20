import Html exposing (..)
import Html.Attributes exposing (..)
import Html.App as Html

-- component import example
import Components.Invitasjon exposing ( invitasjon )
import Components.Informasjon exposing ( informasjon )

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
  div [ class "container" ][    -- inline CSS (literal)
      div [ class "banner" ][
        h1 [class "banner-head" ] [
        div [] [ text ("Bli med å feire.") ]
        , div [] [ text ("Torunn og Trond fyller 119 år.") ]
        ]
      ]
      , div [ class "l-content" ] [
          invitasjon model
          , informasjon model
      ]

  ]
