const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Behaviors.solid,
		C3.Behaviors.Orbit,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.System.Acts.Scroll,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Sprite.Acts.StartAnim,
		C3.Plugins.System.Cnds.Compare
	];
};
self.C3_JsPropNameTable = [
	{Plataforma: 0},
	{boneco: 0},
	{Sólido: 0},
	{lava: 0},
	{piso1: 0},
	{Órbita: 0},
	{obstaculo: 0},
	{moedas: 0},
	{PORTA: 0},
	{trofeu: 0}
];

self.InstanceType = {
	boneco: class extends self.ISpriteInstance {},
	lava: class extends self.ISpriteInstance {},
	piso1: class extends self.ISpriteInstance {},
	obstaculo: class extends self.ISpriteInstance {},
	moedas: class extends self.ISpriteInstance {},
	PORTA: class extends self.ISpriteInstance {},
	trofeu: class extends self.ISpriteInstance {}
}