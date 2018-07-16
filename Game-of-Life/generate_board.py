size = 15
for i in range(size):
  print "<tr>"
  cells = "  "
  for j in range(size):
    print "  <td class=\"dead\" onclick=\"clickHandler("+str(i)+","+str(j)+")\" id=\"cell_"+str(i)+"_"+str(j)+"\">&nbsp;</td> "
  print "</tr>"


