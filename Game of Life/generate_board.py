import sys

size = int(sys.argv[1]);
for i in range(size):
  print "<tr>"
  cells = "  "
  for j in range(size):
    cells = cells + "<td class='dead'>&nbsp;</td> "
  print cells
  print "</tr>"


