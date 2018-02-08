# How to `Git Submodule`
- Author : [SeolHun](https://github.com/Seolhun/)

## Add Submodule
1. git submodule add `${Your Submodule Repositroy URL} ${path submodule be added in Root}`
	- git submodule add `https://github.com/Seolhun/submodule.git` `submodule`

- Result
	- Be craeted `root/submodule` directory
	- `submodule` directory conntected with ${submodule url}
	- created `.submodule`
		> [submodule "root/submodule"]
		>	path = root/submodule
		>	url = https://github.com/Seolhun/submodule.git
