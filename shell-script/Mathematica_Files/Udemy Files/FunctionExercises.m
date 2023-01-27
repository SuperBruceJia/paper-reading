BeginPackage["FunctionExercises`"]

mySum::usage =
"mySum[a,b] adds the two numbers a and b.
mySum[a] adds the sequence of numbers a together."

separate::usage =
"separate[a] takes a list of numbers and highlights them according to their sign."

trigPlot::usage =
"trigPlot[fun,num] plots one of the functions fun (either Sin or Cos) and plots them with frequencies up to num in increments of 1.
trigPlot[fun] uses 3 as the default for num."

report::usage =
"report[person] generates a report about a given person from our internal database."

findroots::usage =
"findroots[l] takes a list l of numbers which represent coefficients of a quadratic equation, and returns the roots."

Begin["Private`"]

mySum[a_, b_] := a + b
mySum[a__] := Total[{a}]

separate[a_Integer?Positive] := Framed[a, Background -> LightRed]
separate[a_Integer?Negative] := Framed[a, Background -> LightBlue]
separate[a_Real] := Framed[a, Background -> Yellow]
separate[x_List] := Table[separate[n], {n, x}]

trigPlot[fun_, num_] :=
 Show[Table[
   Plot[fun[n*x], {x, 0, 10},
    PlotStyle -> {RGBColor[{n/num, 1 - n/num, 1}]}], {n, 1, num, 1}]]
trigPlot[fun_] := trigPlot[fun, 3]

report[person_] := (
  data = person /. DataBase;
  age = "Age" /. data;
  state = "State" /. data;
  gender = "Gender" /. data;
  Print[Row[{"name:", person}]];
  Print[Row[{"Age:", age}]];
  Print[Row[{"State:", state}]];
  Print[Row[{"Gender:", gender}]];
  )

DataBase = {
   "Jalanda" -> {"Age" -> 27, "State" -> "PA", "Gender" -> "F"},
   "Jack" -> {"Age" -> 54, "State" -> "CA", "Gender" -> "M"},
   "Jake" -> {"Age" -> 34, "State" -> "MD", "Gender" -> "M"},
   "Jane" -> {"Age" -> 14, "State" -> "PA", "Gender" -> "F"},
   "Jeremiah" -> {"Age" -> 57, "State" -> "PA", "Gender" -> "M"},
   "Jodie" -> {"Age" -> 39, "State" -> "FL", "Gender" -> "F"},
   "Joe" -> {"Age" -> 37, "State" -> "PA", "Gender" -> "M"},
   "John" -> {"Age" -> 23, "State" -> "IL", "Gender" -> "M"},
   "Judy" -> {"Age" -> 43, "State" -> "PA",  "Gender" -> "F"}
   };


findroots[
  eq : {A_ /; MatchQ[A, _Integer | _Real],
    B_ /; MatchQ[B, _Integer | _Real],
    C_ /; MatchQ[C, _Integer | _Real]}] :=
 (a = eq[[1]]; b = eq[[2]];
   c = eq[[3]];
  x1 = (-b + Sqrt[b^2 - 4 a c])/(2 a);
  x2 = (-b - Sqrt[b^2 - 4 a c])/(2 a);
  {N[x1, 2], N[x2, 2]}
  )
findroots[eq_] := Print["Input must be a list of real valued numbers"]

End[]

EndPackage[]
