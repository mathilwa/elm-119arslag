module Messages exposing (..)

import Http
import String
import Components.Pamelding.Model exposing (Pameldt)

type Msg
    = MeldPa
    | GaTilInformasjon
    | GaTilHovedside
    | GaTilKontakt
    | Navn String
    | Epost String
    | FetchFerdig (List Pameldt)
    | FetchError Http.Error
