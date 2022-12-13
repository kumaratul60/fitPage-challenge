const DataFormat = (id, criteria, index) => {
  if (criteria?.type === "plain_text") {
    return criteria?.text;
  } else if (criteria?.type === "variable") {
    let criteriaText = criteria?.text;
    for (var key of Object?.keys(criteria?.variable)) {
      if (criteria?.variable[key]?.type === "value") {
        criteriaText = criteriaText?.replace(
          key,
          `<a href="/${id}/${index}/${key}">
			(${criteria?.variable[key]?.values[0]}) 
			</a>`
        );
      } else if (criteria?.variable[key]?.type === "indicator") {
        criteriaText = criteriaText?.replace(
          key,
          `<a 
		  		href="/${id}/${index}/${key}"
			>
				(${criteria?.variable[key]?.default_value})
			</a>`
        );
      }
    }
    return criteriaText;
  }
};

export default DataFormat;
