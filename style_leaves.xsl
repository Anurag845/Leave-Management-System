<?xml version="1.0" encoding="UTF-8"?>
<html xsl:version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<body style="font-family:Arial;font-size:12pt;">
	<h2 style="text-align:center">Leave History</h2>
  <div style="margin-left:auto;margin-right:auto;">
	<table border="1">
		<tr>
		<th>Type</th>
		<th>Duration</th>
		<th>Start</th>
		<th>End</th>
		<th>Status</th>
		</tr>
		<xsl:for-each select="LeaveHistory/Leave">
			<tr>
			<td><xsl:value-of select="Type"/></td>
			<td><xsl:value-of select="Duration"/></td>
			<td><xsl:value-of select="Start"/></td>
			<td><xsl:value-of select="End"/></td>
			<td><xsl:value-of select="Status"/></td>
			</tr>
		</xsl:for-each>
	</table>
   
  </div>
</body>
</html> 
