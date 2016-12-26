module View exposing (..)

import Html exposing (Html, text, div)
import Messages exposing (Msg)
import Models exposing (Model)


view : Model -> Html Msg
view model =
    div []
        [ text model ]
