interface ThemeTemplate {
	mainColor: string;
	subColor: string;
}

const defaultTheme: ThemeTemplate = {
	mainColor: '#909090',
	subColor: '#99092',
};

export { type ThemeTemplate, defaultTheme };
