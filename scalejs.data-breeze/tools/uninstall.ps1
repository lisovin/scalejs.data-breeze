param($installPath, $toolsPath, $package, $project)

$project |
	Remove-Paths 'scalejs.data-breeze,breeze,breeze.metadata-helper,q' |
	Remove-ScalejsExtension 'scalejs.data-breeze' |
	Out-Null
