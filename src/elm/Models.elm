module Models exposing (..)

import Routing
import String


type alias Model =
    { pameldte : List String
    , route : Routing.Route
    }


initialModel : Routing.Route -> Model
initialModel route =
    { pameldte = []
    , route = route
    }

