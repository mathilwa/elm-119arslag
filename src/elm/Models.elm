module Models exposing (..)

import Routing
import String
import Components.Pamelding.Model exposing (Pameldt)


type alias Model =
    { pameldte : List Pameldt
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

