module Routing exposing (..)

import Navigation
import UrlParser exposing (..)
import String

type Route
   = HovedsideRoute
   | InformasjonRoute
   | KontaktRoute
   | NotFoundRoute


matchers: Parser (Route -> a) a
matchers =
    oneOf
        [ format HovedsideRoute (s "")
         , format InformasjonRoute (s "informasjon")
         , format KontaktRoute (s "kontakt")
         ]

hashParser: Navigation.Location -> Result String Route
hashParser location =
 location.hash
     |> String.dropLeft 1
     |> parse identity matchers


parser : Navigation.Parser (Result String Route)
parser =
    Navigation.makeParser hashParser


routeFromResult : Result String Route -> Route
routeFromResult result =
    case result of
        Ok route ->
            route

        Err string ->
            NotFoundRoute
