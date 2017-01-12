module Models exposing (..)

import Routing
import String
import Components.Pamelding.Model exposing (Pameldt)
import Array

type alias Model =
    { pameldte : List Pameldt
    , folge: Array.Array String
    , antallFolge: Int
    , route : Routing.Route
    , navn : String
    , epost : String
    }


initialModel : Routing.Route -> Model
initialModel route =
    { pameldte = []
    , folge = Array.empty
    , antallFolge = 0
    , route = route
    , navn = ""
    , epost = ""
    }

