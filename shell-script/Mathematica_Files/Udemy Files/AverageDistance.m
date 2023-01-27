BeginPackage["AverageDistance`"]

ComputeAverageDistance::usage =
  "ComputeAverageDistance[w,h] finds the average distance between any two points in a square of size w X h."
ComputeDistance
Begin["Private`"]

MakePoint[w_, h_] := {RandomReal[{0, w}], RandomReal[{0, h}]}

MakePointPair[w_, h_] := {MakePoint[w, h], MakePoint[w, h]}

ComputeDistance[{p1_, p2_}] := Sqrt[Total[(p2 - p1)^2]]

ComputeAverageDistance[w_, h_, OptionsPattern[Samples -> 50]] :=
 Sum[ComputeDistance[MakePointPair[w, h]], {i, OptionValue[Samples]}]/
  OptionValue[Samples]

End[]

EndPackage[]
