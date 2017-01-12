module Messages exposing (..)

import Http
import Components.Pamelding.Model exposing (Pameldt)

type Msg
    = MeldPa Pameldt
    | GaTilInformasjon
    | GaTilHovedside
    | GaTilKontakt
    | LeggTilFolge
    | OppdaterFolge Int String
    | Navn String
    | Epost String
    | FetchFerdig (List Pameldt)
    | FetchError Http.Error
    | LagreFerdig Pameldt
    | LagreError Http.Error
