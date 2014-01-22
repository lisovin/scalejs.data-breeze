param($installPath, $toolsPath, $package, $project)

$project |
	Add-Paths "{
		'scalejs.data-breeze' : 'Scripts/scalejs.data-breeze-$($package.Version)',
		'breeze': 'Scripts/breeze.debug',
        'breeze.metadata-helper': 'Scripts/breeze.metadata-helper',
        'q': 'Scripts/q'
	}" |
	Add-ScalejsExtension 'scalejs.data-breeze' |
	Out-Null