import sys

size = int(sys.argv[1]);
for i in range(size):
  print "<tr>"
  cells = "  "
  for j in range(size):
    cells = cells + "<td>&nbsp;</td> "
  print cells
  print "</tr>"


