import * as React from "react";
import {StyleSheet, View, Image, Text, TextInput} from "react-native";

const LogIn = () => {
  	
  	return (
    		<View style={styles.logIn}>
      			<View style={[styles.statusBarIphoneXOrNewe, styles.homeIndicatorPosition]}>
        				<View style={styles.notch} />
        				<View style={[styles.rightSide, styles.iconLayout]}>
          					<Image style={[styles.batteryIcon, styles.iconLayout]} resizeMode="cover" source="Battery.png" />
          					<Image style={[styles.wifiIcon, styles.iconLayout]} resizeMode="cover" source="Wifi.png" />
          					<Image style={[styles.mobileSignalIcon, styles.iconLayout]} resizeMode="cover" source="Mobile Signal.png" />
        				</View>
        			 
      			</View>
      			<View style={[styles.homeIndicator, styles.homeIndicatorPosition]} />
      			<View style={[styles.statusBarIphoneXOrNewe, styles.homeIndicatorPosition]}>
        				<View style={styles.notch} />
        				<View style={[styles.rightSide, styles.iconLayout]}>
          					<Image style={[styles.batteryIcon, styles.iconLayout]} resizeMode="cover" source="Battery.png" />
          					<Image style={[styles.wifiIcon, styles.iconLayout]} resizeMode="cover" source="Wifi.png" />
          					<Image style={[styles.mobileSignalIcon, styles.iconLayout]} resizeMode="cover" source="Mobile Signal.png" />
        				</View>
        				{/* <View style={[styles.leftSide, styles.timeLayout]}>
          					<View style={[styles.time, styles.timeLayout]}>
            						<Text style={styles.text1}>9:41</Text>
          					</View>
        				</View> */}
      			</View>
      			<Text style={[styles.haventAnAccountContainer, styles.orContinueWithTypo]}>
        				<Text style={styles.haventAnAccount}>{`Haven't an account? `}</Text>
        				<Text style={styles.register}>Register</Text>
      			</Text>
      			<View style={styles.headlineParent}>
        				<Text style={styles.headline}>Welcome Back 👋</Text>
        				<Text style={styles.headline1}>Let's log in. Apply to jobs!</Text>
      			</View>
      			<View style={styles.buttonParent}>
        				<View style={[styles.button, styles.buttonLayout]}>
          					<Text style={styles.next}>Log in</Text>
        				</View>

        				<View style={[styles.rectangleParent, styles.rectangleLayout]}>
          					<View style={styles.groupChild} />
          					<TextInput
							 style={[styles.email, styles.nameClr]}
							 placeholder = "Email"
							 />
        				</View>

        				<View style={[styles.rectangleGroup, styles.rectangleLayout]}>
          					<View style={styles.groupChild} />
							
          					<TextInput
							 style={[styles.name, styles.nameClr]}
							 placeholder =  "Name"
							 />
        				</View>
      			</View>
      			<View style={[styles.orContinueWithParent, styles.buttonLayout]}>
        				<Text style={[styles.orContinueWith, styles.nameClr]}>Or continue with</Text>
        				<View style={[styles.groupInner, styles.lineViewLayout]} />
        				<View style={[styles.lineView, styles.lineViewLayout]} />
      			</View>
      			<View style={styles.groupParent}>
        				

        				<Image
						 style={[styles.groupChild1, styles.groupChildLayout]}
						  resizeMode="cover"
						    source={require('../assets/google.png')} 
						    />
							<Image
						 style={[styles.groupIcon, styles.groupChildLayout]} 
						 resizeMode="cover"
						  source={require('../assets/apple.png')} 
						  />
        				<Image
						 style={[styles.groupChild2, styles.groupChildLayout]}
						  resizeMode="cover"
						    source={require('../assets/Vector.png')} 
						    />
      			</View>
      			<Text style={styles.jobizz}>Jobizz</Text>
    		</View>);
};

const styles = StyleSheet.create({
  	homeIndicatorPosition: {
    		width: 375,
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
  	orContinueWithTypo: {
    		
    		textAlign: "center",
			marginBottom:30
  	},
  	buttonLayout: {
    		width: 327,
    		position: "absolute"
  	},
  	rectangleLayout: {
    		height: 52,
    		width: 327,
    		position: "absolute"
  	},
  	nameClr: {
    		color: "#afb0b6",
    		position: "absolute"
  	},
  	lineViewLayout: {
    		height: 1,
    		width: 99,
    		borderTopWidth: 0.5,
    		top: 8,
    		borderColor: "#afb0b6",
    		borderStyle: "solid",
    		position: "absolute"
  	},
  	groupChildLayout: {
    		width: 30,
    		height: 30,
    		top: 0,
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
  	text: {
    		width: 40,
    		textAlign: "center",
    		color: "#fff",
    		
    		fontWeight: "600",
    		lineHeight: 20,
    		letterSpacing: 0,
    		fontSize: 15,
    		left: 7,
    		top: 1,
    		position: "absolute"
  	},
  	time: {
    		borderRadius: 24,
    		left: 0,
    		top: 0
  	},
  	leftSide: {
    		top: 12,
    		left: 24
  	},
  	statusBarIphoneXOrNewe: {
    		height: 44,
    		top: 0,
    		overflow: "hidden"
  	},
  	homeIndicator: {
    		top: 778,
    		height: 34
  	},
  	text1: {
    		color: "#0d0d26",
    		width: 40,
    		textAlign: "center",
    		
    		fontWeight: "600",
    		lineHeight: 20,
    		letterSpacing: 0,
    		fontSize: 15,
    		left: 7,
    		top: 1,
    		position: "absolute"
  	},
  	haventAnAccount: {
    		color: "#bdbec2"
  	},
  	register: {
    		color: "#356899"
  	},
  	haventAnAccountContainer: {
    		top: 694,
    		left: 102,
    		fontSize: 14,
    		
    		position: "absolute"
  	},
  	headline: {
    		fontSize: 24,
    		lineHeight: 34,
    		textAlign: "left",
    		
    		letterSpacing: -0.4,
    		color: "#0d0d26",
    		fontWeight: "600",
    		left: 0,
    		top: 0,
    		position: "absolute"
  	},
  	headline1: {
    		top: 41,
    		lineHeight: 22,
    		
    		opacity: 0.4,
    		letterSpacing: -0.1,
    		textAlign: "left",
    		fontSize: 14,
    		color: "#0d0d26",
    		left: 0,
    		position: "absolute"
  	},
  	headlineParent: {
    		top: 147,
    		width: 207,
    		height: 63,
    		left: 24,
    		position: "absolute"
  	},
  	next: {
    		fontSize: 16,
    		letterSpacing: -0.2,
    		lineHeight: 24,
    		
    		fontWeight: "500",
    		textAlign: "center",
    		color: "#fff"
  	},
  	button: {
    		top: 152,
    		borderRadius: 5,
    		backgroundColor: "#356899",
    		flexDirection: "row",
    		alignItems: "center",
    		justifyContent: "center",
    		paddingHorizontal: 48,
    		paddingVertical: 16,
    		left: 1
  	},
  	groupChild: {
    		borderRadius: 10,
    		borderWidth: 1,
    		borderColor: "#afb0b6",
    		borderStyle: "solid",
    		height: 52,
    		width: 327,
    		left: 0,
    		top: 0,
    		position: "absolute"
  	},
  	email: {
    		left: 15,
    		lineHeight: 21,
    		top: 15,
    		color: "#afb0b6",
    		
    		fontWeight: "500",
    		letterSpacing: -0.1,
    		textAlign: "left",
    		fontSize: 14
  	},
  	rectangleParent: {
    		top: 68,
    		left: 1
  	},
  	name: {
    		left: 16,
    		lineHeight: 21,
    		top: 15,
    		color: "#afb0b6",
    		
    		fontWeight: "500",
    		letterSpacing: -0.1,
    		textAlign: "left",
    		fontSize: 14
  	},
  	rectangleGroup: {
    		left: 0,
    		top: 0
  	},
  	buttonParent: {
    		top: 261,
    		left: 23,
    		width: 328,
    		height: 208,
    		position: "absolute"
  	},
  	orContinueWith: {
    		left: 114,
    		fontSize: 13,
    	
    		textAlign: "center",
    		top: 0
  	},
  	groupInner: {
    		left: 0
  	},
  	lineView: {
    		left: 229
  	},
  	orContinueWithParent: {
    		top: 534,
    		height: 16,
    		left: 24
  	},
  	groupIcon: {
    		left: 80
  	},
  	groupChild1: {
    		left: 0
  	},
  	groupChild2: {
    		left: 160
  	},
  	groupParent: {
    		top: 588,
    		left: 79,
    		width: 216,
    		height: 56,
    		position: "absolute"
  	},
  	jobizz: {
    		top: 106,
    		left: -16,
    		fontSize: 22,
    		width: 150,
    	
    		letterSpacing: -0.4,
    		color: "#356899",
    		textAlign: "center",
    		fontWeight: "600",
    		position: "absolute"
  	},
  	logIn: {
    		backgroundColor: "#fafafd",
    		flex: 1,
    		width: "100%",
    		height: 812,
    		overflow: "hidden"
  	}
});

export default LogIn;
