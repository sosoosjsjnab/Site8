import React from "react";
import theme from "theme";
import { Theme, Link, Text } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { StackItem, Stack, Section } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Privacy Policy
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section
			padding="60px 0"
			sm-padding="40px 0"
			min-height="600px"
			sm-min-height="auto"
			background="--color-light"
			display="flex"
			flex-direction="column"
		>
			<Text
				font="--base"
				text-transform="uppercase"
				letter-spacing="1px"
				max-width="850px"
				color="--grey"
				margin="0px"
			>
				<Link href="/index">
					Home
				</Link>
			</Text>
			<Text
				as="h1"
				margin="8px 0px 32px"
				font="--headline1"
				md-font="--headline2"
				color="--dark"
				max-width="850px"
			>
				Privacy Policy
			</Text>
			<Stack margin-top="auto" color="--grey" font="--base">
				<StackItem width="50%" md-width="100%">
					<Text margin="0px">
						("we"," we "or" our") operates the website (the"service"). 
This page informs you of our policies regarding the collection, use and disclosure of personal data when you use our service and the choices you make with that data. Our privacy policy is for created by PrivacyPolicies.com privacy Policy generator. 
We use your data to provide and improve the service. By using the service, you consent to the collection and use of information in accordance with this Policy. Unless otherwise defined in this privacy Policy, terms used in this privacy Policy have the same meaning as in our terms available from  
Collection And Use Of Information 
We collect several different types of information for different purposes to provide and improve our service to you. 
Types of data collected 
personal data 
When using our service, we may ask you to provide us with certain personal information that may be used to contact or identify you ("personal data"). Personal information may include, but is not limited to: 
Email address 
Cookies and usage data 
usage data 
We may also collect information about how the service is accessed and used ("usage data"). This usage data may include information such as your computer's Internet Protocol address (such as IP address), browser type, browser version, the pages of our service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data. 
Tracking And Data Cookies 
We use cookies and similar tracking technologies to track activity on our service and store certain information. 
Cookies are files with a small amount of data that may contain an anonymous unique identifier. Cookies are sent to your browser from the website and stored on your device. Tracking technologies also use beacons, tags, and scripts to collect and track information, and to improve and analyze our service. 
You can ask your browser to refuse all cookies or specify when a cookie is sent. However, if you do not accept cookies, you may not be able to use certain parts of our service. You can learn more about how to manage cookies in the cookies browser guide. 
Examples of cookies we use: 
Session Cookies. We use session cookies to operate our service. 
Cookie Preferences. We use preference cookies to remember your preferences and preferences. 
Security Cookies. We use cookies for security purposes. 
use of data 
uses the collected data for various purposes: 
To provide and maintain the service 
To notify you of changes to our service 
To allow you to participate in interactive features of our service when you choose to do so 
To provide customer service and support 
Provide analysis or valuable information so we can improve the service 
To monitor service usage 
Detection, prevention and elimination of technical problems 
data transmission 
Your information, including personal information, may be transferred to and stored on computers located outside of your state, province, country or other governmental jurisdiction where data protection laws may differ from those of your jurisdiction. 
If you are located outside the United States and choose to provide information to us, please note that we transfer data, including personal data, to the United States and process it there. 
Your acceptance of this privacy Policy and subsequent provision of such information constitutes your consent to such transfer. 
we will take all steps reasonably necessary to ensure the safe handling of your data in accordance with this privacy Policy, and no transfer of your personal data will take place to an entity or country unless proper controls are in place, including the security of your data and other personal information. 
Disclosure 
legal norm 
may disclose your personal information in the good faith belief that such action is necessary to: 
To fulfill a legal obligation 
To protect and defend rights or property 
To prevent or investigate possible wrongdoing in connection with the service 
To protect the personal safety of service users or the public 
To protect against legal liability 
data security 
The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect Your personal information, we cannot guarantee its absolute security. 
service sector 
We may hire third-party companies and individuals to facilitate the provision of our services ("service providers"), to provide services on our behalf, to perform services related to the service, or to assist us in analyzing the use of our services. 
These third parties have access to your personal data only to perform these tasks on our behalf and are required not to disclose or use it for any other purpose. 
Links To Other Sites 
Our service may contain links to other sites that are not operated by us. If you click on a third party link, you will be redirected to that third party's website. We strongly encourage you to read the privacy policy of each site you visit. 
We do not control and are not responsible for the content, privacy policies or practices of any third party sites or services. 
Privacy for children 
Our service does not reach out to anyone under the age of 18 ("children"). 
We do not knowingly collect personal information from anyone under the age of 18. If you are a parent or guardian and you know that your children have provided us with personal information, please contact us. If we become aware that we have collected children's personal information without parental consent, we will take steps to remove that information from our servers. 
Changes To This Privacy Policy 
We may update our privacy policy from time to time. We will notify you of any changes by posting the new privacy Policy on this page. 
We will notify you by email and / or prominent notice on our service before the changes take effect and update the "effective date" at the top of this privacy policy. 
We encourage you to periodically review this privacy policy for any changes. Changes to this privacy Policy will be effective upon posting on this page. 
contact us
If you have any questions about this privacy policy, please do.
					</Text>
				</StackItem>
				<StackItem width="50%" md-width="100%" />
			</Stack>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});