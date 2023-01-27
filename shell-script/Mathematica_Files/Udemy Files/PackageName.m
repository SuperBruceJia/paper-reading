BeginPackage[ "PackageName`"]

  MainFunction::usage = "MainFunction[name_] prints out a greeting."

    Begin[ "Private`"]

      MainFunction[name_] := "Hello "<> name <>" from inside my package :0!"

    End[]

EndPackage[]
