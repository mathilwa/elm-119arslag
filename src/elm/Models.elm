module Models exposing (..)

import Routing
import String


type alias Model =
    { pameldte : List String
    , route : Routing.Route
    , navn : String
    , epost : String
    }


initialModel : Routing.Route -> Model
initialModel route =
    { pameldte = []
    , route = route
    , navn = ""
    , epost = ""
    }

