import * as React from "react";
import {Text, StyleSheet, View, Image} from "react-native";

const Homepage = () => {
  	
  	return (
    		<View style={styles.homepage}>
      			<View style={styles.headlineParent}>
        				<Text style={styles.headline}>eric@gmail.com</Text>
        				<Text style={styles.headline1}>Eric Atsu</Text>
      			</View>
      			<Text style={[styles.featuredJobs, styles.featuredJobsTypo]}>Featured Jobs</Text>
      			<Text style={[styles.seeAll, styles.yearTypo]}>See all</Text>
      			<View style={[styles.greenBg, styles.greenBgPosition]} />
      			<Image style={[styles.maskGroupIcon, styles.greenBgPosition]} resizeMode="cover" source="Mask Group.png" />
      			<View style={styles.groupParent}>
        				<View style={styles.accraGhanaParent}>
          					<Text style={[styles.accraGhana, styles.textTypo]}>Accra, Ghana</Text>
          					<Text style={[styles.text, styles.textTypo]}>$180,00</Text>
        				</View>
        				<View style={styles.softwareEngineerParent}>
          					<Text style={[styles.softwareEngineer, styles.facebookPosition]}>Software Engineer</Text>
          					<Text style={[styles.facebook, styles.googleTypo]}>Facebook</Text>
          					<View style={[styles.groupChild, styles.groupChildPosition]} />
        				</View>
        				<View style={styles.bookmark5} />
      			</View>
      			<Text style={styles.popularJobs}>Popular Jobs</Text>
      			<Text style={styles.seeAll1}>See all</Text>
      			<View style={styles.statusBarIphoneXOrNewe}>
        				<View style={styles.notch} />
        				<View style={[styles.rightSide, styles.iconLayout]}>
          					<Image style={[styles.batteryIcon, styles.iconLayout]} resizeMode="cover" source="Battery.png" />
          					<Image style={[styles.wifiIcon, styles.iconLayout]} resizeMode="cover" source="Wifi.png" />
          					<Image style={[styles.mobileSignalIcon, styles.iconLayout]} resizeMode="cover" source="Mobile Signal.png" />
        				</View>
        				<View style={[styles.leftSide, styles.timeLayout]}>
          					<View style={[styles.time, styles.timeLayout]}>
            						<Text style={styles.text1}>9:41</Text>
          					</View>
        				</View>
      			</View>
      			<Image style={[styles.vectorIcon, styles.vectorIconLayout]} resizeMode="cover" source="Vector.png" />
      			<View style={[styles.rectangleParent, styles.searchPosition1]}>
        				<View style={[styles.groupItem, styles.componentLayout]} />
        				<Text style={[styles.jrExecutive, styles.fullTimeLayout]}>Jr Executive</Text>
        				<Text style={[styles.burgerKing, styles.burgerKingPosition]}>Burger King</Text>
        				<Text style={[styles.losAngelsUs, styles.burgerKingPosition]}>Los Angels, US</Text>
        				<Text style={[styles.y, styles.yTypo]}>$96,000/y</Text>
        				<View style={[styles.component1, styles.componentLayout]}>
          					<View style={styles.childShadowBox} />
          					<Text style={[styles.productManager, styles.beatsPosition1]}>Product Manager</Text>
          					<Text style={[styles.beats, styles.beatsPosition]}>Beats</Text>
          					<Text style={[styles.floridaUs, styles.beatsPosition]}>Florida, US</Text>
          					<Text style={[styles.y1, styles.yTypo]}>$84,000/y</Text>
          					<Image style={[styles.image8Icon, styles.iconPosition]} resizeMode="cover" source="image 8.png" />
        				</View>
        				<Image style={styles.burgerKing41Icon} resizeMode="cover" source="burger-king-4 1.png" />
      			</View>
      			<View style={[styles.search, styles.searchPosition1]}>
        				<View style={[styles.searchChild, styles.searchPosition]} />
        				<View style={[styles.searchItem, styles.searchPosition]} />
        				<Text style={styles.searchAJob}>Search a job or position</Text>
        				<Image style={[styles.search11Icon, styles.iconPosition]} resizeMode="cover" source="search.1 1.png" />
        				<Image style={[styles.filter5Icon, styles.vectorIconLayout]} resizeMode="cover" source="filter.5.png" />
      			</View>
      			<Image style={styles.ellipseIcon} resizeMode="cover" source="Ellipse.png" />
      			<Image style={[styles.homepageChild, styles.homepageChildPosition]} resizeMode="cover" source="Ellipse 798.png" />
      			<Image style={styles.homepageItem} resizeMode="cover" source="Ellipse 767.png" />
      			<View style={[styles.homepageInner, styles.homepageInnerPosition]} />
      			<Image style={styles.homepageInnerPosition} resizeMode="cover" source="Mask Group.png" />
      			<View style={[styles.groupContainer, styles.homepageChildPosition]}>
        				<View style={styles.texasParent}>
          					<Text style={[styles.texas, styles.textTypo1]}>Texas</Text>
          					<Text style={[styles.year, styles.textTypo1]}>$160,00/year</Text>
        				</View>
        				<View style={[styles.fullStackDeveloperParent, styles.groupChildPosition]}>
          					<Text style={[styles.fullStackDeveloper, styles.googlePosition]}>Full-Stack Developer</Text>
          					<Text style={[styles.google, styles.googlePosition]}>Google</Text>
          					<View style={[styles.groupChild, styles.groupChildPosition]} />
        				</View>
        				<View style={[styles.fullTimeWrapper, styles.wrapperSpaceBlock]}>
          					<Text style={[styles.fullTime, styles.fullTimeLayout]}>Full-Time</Text>
        				</View>
        				<View style={[styles.juniorWrapper, styles.wrapperSpaceBlock]}>
          					<Text style={[styles.fullTime, styles.fullTimeLayout]}>Junior</Text>
        				</View>
        				<Image style={styles.grommetIconsgoogle} resizeMode="cover" source="grommet-icons:google.png" />
        				<Image style={styles.bookmark5} resizeMode="cover" source="bookmark.5.png" />
      			</View>
      			<View style={[styles.component2Wrapper, styles.componentLayout]}>
        				<View style={[styles.component2, styles.componentLayout]}>
          					<View style={styles.childShadowBox} />
          					<Text style={[styles.productManager, styles.beatsPosition1]}>Product Manager</Text>
          					<Text style={[styles.beats, styles.beatsPosition]}>Facebook</Text>
          					<Text style={[styles.floridaUs, styles.beatsPosition]}>Florida, US</Text>
          					<Text style={[styles.y1, styles.yTypo]}>$86,000/y</Text>
        				</View>
      			</View>
      			<Image style={[styles.vectorIcon1, styles.vectorIconLayout]} resizeMode="cover" source="Vector.png" />
    		</View>);
};

const styles = StyleSheet.create({
  	featuredJobsTypo: {
    		fontFamily: "Poppins-SemiBold",
    		fontSize: 16,
    		fontWeight: "600",
    		letterSpacing: -0.2
  	},
  	yearTypo: {
    		fontFamily: "Circular Std",
    		lineHeight: 17,
    		fontSize: 14
  	},
  	greenBgPosition: {
    		height: 186,
    		width: 280,
    		top: 292,
    		left: 24,
    		position: "absolute"
  	},
  	textTypo: {
    		fontFamily: "Poppins-Medium",
    		letterSpacing: -0.1
  	},
  	facebookPosition: {
    		left: 62,
    		color: "#fff",
    		lineHeight: 21,
    		textAlign: "left",
    		position: "absolute"
  	},
  	googleTypo: {
    		opacity: 0.75,
    		top: 26,
    		fontWeight: "500",
    		fontSize: 14
  	},
  	groupChildPosition: {
    		height: 46,
    		top: 0,
    		left: 0,
    		position: "absolute"
  	},
  	iconLayout: {
    		height: 11,
    		position: "absolute"
  	},
  	timeLayout: {
    		height: 21,
    		width: 54,
    		position: "absolute"
  	},
  	vectorIconLayout: {
    		maxHeight: "100%",
    		maxWidth: "100%",
    		position: "absolute",
    		overflow: "hidden"
  	},
  	searchPosition1: {
    		width: 327,
    		left: 24,
    		position: "absolute"
  	},
  	componentLayout: {
    		height: 74,
    		width: 327,
    		position: "absolute"
  	},
  	fullTimeLayout: {
    		lineHeight: 18,
    		letterSpacing: -0.1
  	},
  	burgerKingPosition: {
    		opacity: 0.5,
    		top: 38,
    		fontSize: 13,
    		letterSpacing: -0.1,
    		lineHeight: 21,
    		color: "#0d0d26",
    		fontFamily: "Poppins-Regular",
    		position: "absolute"
  	},
  	yTypo: {
    		lineHeight: 19,
    		fontSize: 12,
    		textAlign: "right",
    		fontFamily: "Poppins-Medium",
    		fontWeight: "500",
    		letterSpacing: -0.1,
    		color: "#0d0d26",
    		position: "absolute"
  	},
  	beatsPosition1: {
    		left: "25.38%",
    		textAlign: "left"
  	},
  	beatsPosition: {
    		top: "51.35%",
    		opacity: 0.5,
    		fontSize: 13,
    		letterSpacing: -0.1,
    		lineHeight: 21,
    		color: "#0d0d26",
    		fontFamily: "Poppins-Regular",
    		position: "absolute"
  	},
  	iconPosition: {
    		left: "7.34%",
    		maxHeight: "100%",
    		maxWidth: "100%",
    		position: "absolute",
    		overflow: "hidden"
  	},
  	searchPosition: {
    		backgroundColor: "#f2f2f3",
    		bottom: "0%",
    		top: "0%",
    		height: "100%",
    		borderRadius: 12,
    		position: "absolute"
  	},
  	homepageChildPosition: {
    		left: 338,
    		position: "absolute"
  	},
  	homepageInnerPosition: {
    		left: 314,
    		height: 186,
    		width: 280,
    		top: 292,
    		position: "absolute"
  	},
  	textTypo1: {
    		fontWeight: "500",
    		color: "#fff",
    		position: "absolute"
  	},
  	googlePosition: {
    		left: 64,
    		color: "#fff",
    		fontFamily: "Circular Std",
    		textAlign: "left",
    		position: "absolute"
  	},
  	wrapperSpaceBlock: {
    		paddingVertical: 4,
    		paddingHorizontal: 16,
    		flexDirection: "row",
    		backgroundColor: "rgba(255, 255, 255, 0.15)",
    		borderRadius: 65,
    		top: 71,
    		position: "absolute"
  	},
  	headline: {
    		top: 31,
    		fontSize: 20,
    		letterSpacing: -0.3,
    		textAlign: "left",
    		color: "#95969d",
    		fontFamily: "Poppins-Regular",
    		lineHeight: 24,
    		left: 0,
    		width: 254,
    		position: "absolute"
  	},
  	headline1: {
    		fontSize: 24,
    		lineHeight: 36,
    		fontFamily: "Poppins-Bold",
    		display: "flex",
    		alignItems: "center",
    		color: "#0d0d26",
    		letterSpacing: -0.2,
    		fontWeight: "700",
    		top: 0,
    		textAlign: "left",
    		left: 0,
    		width: 254,
    		position: "absolute"
  	},
  	headlineParent: {
    		top: 64,
    		height: 55,
    		width: 254,
    		left: 24,
    		position: "absolute"
  	},
  	featuredJobs: {
    		lineHeight: 21,
    		fontFamily: "Poppins-SemiBold",
    		fontSize: 16,
    		top: 251,
    		color: "#0d0d26",
    		textAlign: "left",
    		left: 24,
    		position: "absolute"
  	},
  	seeAll: {
    		left: 309,
    		top: 251,
    		fontFamily: "Circular Std",
    		textAlign: "left",
    		color: "#95969d",
    		position: "absolute"
  	},
  	greenBg: {
    		shadowColor: "rgba(83, 134, 228, 0.09)",
    		shadowRadius: 35.09,
    		elevation: 35.09,
    		backgroundColor: "#5386e4",
    		borderRadius: 24,
    		shadowOpacity: 1,
    		shadowOffset: {
      			width: 0,
      			height: 17.128820419311523
    		},
    		height: 186,
    		width: 280,
    		top: 292
  	},
  	maskGroupIcon: {
    		height: 186,
    		width: 280,
    		top: 292
  	},
  	accraGhana: {
    		left: 134,
    		color: "#fff",
    		fontWeight: "500",
    		position: "absolute",
    		fontSize: 15,
    		top: 2,
    		textAlign: "left",
    		lineHeight: 24,
    		fontFamily: "Poppins-Medium"
  	},
  	text: {
    		textAlign: "right",
    		color: "#fff",
    		fontWeight: "500",
    		position: "absolute",
    		fontSize: 15,
    		top: 0,
    		lineHeight: 24,
    		fontFamily: "Poppins-Medium",
    		left: 0
  	},
  	accraGhanaParent: {
    		top: 119,
    		left: 3,
    		width: 236,
    		height: 26,
    		position: "absolute"
  	},
  	softwareEngineer: {
    		top: 2,
    		fontFamily: "Poppins-SemiBold",
    		fontSize: 16,
    		fontWeight: "600",
    		letterSpacing: -0.2,
    		left: 62
  	},
  	facebook: {
    		left: 62,
    		color: "#fff",
    		lineHeight: 21,
    		textAlign: "left",
    		position: "absolute",
    		fontFamily: "Poppins-Medium",
    		letterSpacing: -0.1
  	},
  	groupChild: {
    		width: 46,
    		backgroundColor: "#fff",
    		borderRadius: 12,
    		height: 46
  	},
  	softwareEngineerParent: {
    		width: 207,
    		height: 47,
    		top: 0,
    		left: 0,
    		position: "absolute"
  	},
  	bookmark5: {
    		top: 4,
    		left: 215,
    		width: 19,
    		height: 19,
    		opacity: 0.2,
    		position: "absolute",
    		overflow: "hidden"
  	},
  	groupParent: {
    		left: 48,
    		width: 239,
    		height: 145,
    		top: 316,
    		position: "absolute"
  	},
  	popularJobs: {
    		left: 26,
    		top: 520,
    		fontFamily: "Poppins-SemiBold",
    		fontWeight: "600",
    		lineHeight: 21,
    		fontSize: 16,
    		color: "#0d0d26",
    		letterSpacing: -0.2,
    		textAlign: "left",
    		position: "absolute"
  	},
  	seeAll1: {
    		left: 291,
    		fontSize: 13,
    		top: 520,
    		letterSpacing: -0.1,
    		lineHeight: 21,
    		textAlign: "left",
    		color: "#95969d",
    		fontFamily: "Poppins-Regular",
    		position: "absolute"
  	},
  	notch: {
    		width: 0,
    		height: 0
  	},
  	batteryIcon: {
    		right: 0,
    		width: 24,
    		top: 0
  	},
  	wifiIcon: {
    		right: 29,
    		width: 15,
    		top: 0
  	},
  	mobileSignalIcon: {
    		right: 50,
    		width: 17,
    		top: 0
  	},
  	rightSide: {
    		top: 17,
    		right: 15,
    		width: 67
  	},
  	text1: {
    		top: 1,
    		left: 7,
    		letterSpacing: 0,
    		lineHeight: 20,
    		fontFamily: "SF Pro Text",
    		color: "#000",
    		width: 40,
    		textAlign: "center",
    		fontSize: 15,
    		fontWeight: "600",
    		position: "absolute"
  	},
  	time: {
    		borderRadius: 24,
    		top: 0,
    		left: 0
  	},
  	leftSide: {
    		top: 12,
    		left: 24,
    		height: 21
  	},
  	statusBarIphoneXOrNewe: {
    		width: 375,
    		height: 44,
    		top: 0,
    		left: 0,
    		position: "absolute",
    		overflow: "hidden"
  	},
  	vectorIcon: {
    		height: "2.71%",
    		width: "5.87%",
    		top: "37.47%",
    		right: "78.67%",
    		bottom: "59.82%",
    		left: "15.47%"
  	},
  	groupItem: {
    		borderRadius: 20,
    		height: 74,
    		backgroundColor: "#fff",
    		top: 0,
    		left: 0
  	},
  	jrExecutive: {
    		left: 83,
    		textAlign: "left",
    		top: 16,
    		fontSize: 14,
    		lineHeight: 18,
    		fontFamily: "Poppins-SemiBold",
    		fontWeight: "600",
    		color: "#0d0d26",
    		position: "absolute"
  	},
  	burgerKing: {
    		left: 83,
    		textAlign: "left"
  	},
  	losAngelsUs: {
    		left: 214,
    		textAlign: "right"
  	},
  	y: {
    		left: 241,
    		top: 16
  	},
  	childShadowBox: {
    		elevation: 20,
    		shadowRadius: 20,
    		shadowColor: "rgba(0, 0, 0, 0.02)",
    		bottom: "0%",
    		top: "0%",
    		height: "100%",
    		left: "0%",
    		right: "0%",
    		borderRadius: 20,
    		backgroundColor: "#fff",
    		shadowOpacity: 1,
    		shadowOffset: {
      			width: 0,
      			height: 17.128820419311523
    		},
    		position: "absolute",
    		width: "100%"
  	},
  	productManager: {
    		top: "21.62%",
    		lineHeight: 18,
    		letterSpacing: -0.1,
    		fontSize: 14,
    		fontFamily: "Poppins-SemiBold",
    		fontWeight: "600",
    		color: "#0d0d26",
    		position: "absolute"
  	},
  	beats: {
    		left: "25.38%",
    		textAlign: "left"
  	},
  	floridaUs: {
    		left: "72.78%",
    		textAlign: "right"
  	},
  	y1: {
    		left: "73.7%",
    		top: "21.62%"
  	},
  	image8Icon: {
    		height: "58.11%",
    		width: "13.15%",
    		right: "79.51%",
    		bottom: "20.27%",
    		top: "21.62%"
  	},
  	component1: {
    		top: 91,
    		left: 0
  	},
  	burgerKing41Icon: {
    		left: 25,
    		width: 41,
    		height: 43,
    		top: 16,
    		position: "absolute",
    		overflow: "hidden"
  	},
  	rectangleParent: {
    		top: 561,
    		height: 165
  	},
  	searchChild: {
    		width: "14.68%",
    		left: "85.32%",
    		backgroundColor: "#f2f2f3",
    		right: "0%"
  	},
  	searchItem: {
    		width: "80.43%",
    		right: "19.57%",
    		left: "0%",
    		backgroundColor: "#f2f2f3"
  	},
  	searchAJob: {
    		top: "27.08%",
    		left: "16.51%",
    		lineHeight: 23,
    		letterSpacing: -0.1,
    		fontSize: 15,
    		textAlign: "left",
    		color: "#95969d",
    		fontFamily: "Poppins-Regular",
    		position: "absolute"
  	},
  	search11Icon: {
    		height: "41.67%",
    		width: "6.12%",
    		top: "29.17%",
    		right: "86.54%",
    		bottom: "29.17%",
    		opacity: 0.4
  	},
  	filter5Icon: {
    		height: "54.17%",
    		width: "7.95%",
    		top: "22.92%",
    		right: "3.36%",
    		bottom: "22.92%",
    		left: "88.69%"
  	},
  	search: {
    		top: 163,
    		height: 48
  	},
  	ellipseIcon: {
    		top: 72,
    		left: 300,
    		height: 54,
    		width: 54,
    		position: "absolute"
  	},
  	homepageChild: {
    		top: 76,
    		width: 16,
    		height: 16
  	},
  	homepageItem: {
    		top: 80,
    		left: 342,
    		width: 8,
    		height: 8,
    		position: "absolute"
  	},
  	homepageInner: {
    		backgroundColor: "#04284a",
    		borderRadius: 24
  	},
  	texas: {
    		left: 196,
    		color: "#fff",
    		fontFamily: "Circular Std",
    		lineHeight: 17,
    		fontSize: 14,
    		top: 0,
    		textAlign: "left"
  	},
  	year: {
    		textAlign: "right",
    		color: "#fff",
    		fontFamily: "Circular Std",
    		lineHeight: 17,
    		fontSize: 14,
    		top: 0,
    		left: 0
  	},
  	texasParent: {
    		top: 121,
    		width: 232,
    		height: 17,
    		left: 0,
    		position: "absolute"
  	},
  	fullStackDeveloper: {
    		fontSize: 17,
    		lineHeight: 20,
    		top: 2,
    		left: 64,
    		fontWeight: "700"
  	},
  	google: {
    		opacity: 0.75,
    		top: 26,
    		fontWeight: "500",
    		fontSize: 14,
    		lineHeight: 17,
    		left: 64
  	},
  	fullStackDeveloperParent: {
    		width: 229
  	},
  	fullTime: {
    		fontSize: 11,
    		textAlign: "center",
    		color: "#fff",
    		lineHeight: 18,
    		fontFamily: "Poppins-Regular"
  	},
  	fullTimeWrapper: {
    		left: 78
  	},
  	juniorWrapper: {
    		left: 167
  	},
  	grommetIconsgoogle: {
    		left: 12,
    		width: 22,
    		height: 22,
    		top: 12,
    		position: "absolute",
    		overflow: "hidden"
  	},
  	groupContainer: {
    		width: 234,
    		height: 138,
    		top: 316
  	},
  	component2: {
    		top: 0,
    		left: 0
  	},
  	component2Wrapper: {
    		top: 746,
    		left: 23
  	},
  	vectorIcon1: {
    		height: "4.57%",
    		width: "10.67%",
    		top: "87.7%",
    		right: "74.93%",
    		bottom: "7.72%",
    		left: "14.4%"
  	},
  	homepage: {
    		backgroundColor: "#fafafd",
    		flex: 1,
    		height: 870,
    		overflow: "hidden",
    		width: "100%"
  	}
});

export default Homepage;
