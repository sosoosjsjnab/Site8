import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Input, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override, StackItem, Stack, Section, Formspree } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section background="--color-darkL2" padding="64px 0" sm-padding="40px 0">
			<Stack>
				<StackItem width="50%" lg-width="100%">
					<Override
						slot="StackItemContent"
						margin-right="-20%"
						padding-bottom="120%"
						background="url(https://uploads.quarkly.io/5fd1663d04e716001efc6288/images/1295123166463-6439.jpg?v=2020-12-10T00:10:43.838Z) 50% 15%/cover"
						lg-margin-right="0"
						lg-padding-bottom="80%"
					/>
				</StackItem>
				<StackItem width="50%" lg-width="100%">
					<Override
						slot="StackItemContent"
						padding="98px 64px"
						margin-left="-20%"
						margin-top="36px"
						background="--color-red"
						color="--light"
						mix-blend-mode="lighten"
						lg-margin-left="0"
						lg-margin-top="0"
						flex-direction="column"
					/>
					<Text
						as="h4"
						margin="0"
						font="--base"
						letter-spacing="1px"
						text-transform="uppercase"
					>
						<Link href="/terms">
							Terms
						</Link>
						{" "}-{" "}
						<Link
							href="/privacy"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							privacy
						</Link>
						{" "}-{" "}
						<Link
							href="/cookies"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							cookies
						</Link>
					</Text>
					<Text as="h1" margin="0 0 16px 0" font="--headline1" lg-font="--headline2">
						Armenia in the distant past: the early Middle Ages
					</Text>
				</StackItem>
			</Stack>
		</Section>
		<Section padding="64px 0" sm-padding="40px 0" font="--base" color="--dark">
			<Text
				as="p"
				color="--grey"
				max-width="520px"
				margin="0 auto"
				text-align="center"
				font="--lead"
			>
				After the partition of Armenia between Sassanian Iran and the Roman Empire, its territory became a constant subject of disputes between the two powers. The Romans and Persians often fought among themselves, seizing each other's lands inhabited by Armenians. In 395, the united Roman Empire broke up into the Western Empire with its capital in Rome and the Eastern Empire with its capital in Constantinople. The Eastern Roman Empire, which included the western part of Armenia, went down in history as Byzantine (after the name of the ancient Greek colony Byzantium, on the site of which Constantinople was founded). The Byzantine Empire continued its territorial confrontation with the Sassanid state. In 535 - 538 Byzantine emperor Justinian I carried out an administrative reform in the empire, according to which the same laws were introduced in all its provinces. The reform severely limited the powers and privileges of the local nobility, which also affected the Byzantine part of Armenia.
			</Text>
			<Stack margin-top="40px">
				<StackItem width="25%" lg-width="50%" sm-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box height="0" margin="0 0 20px 0" padding-bottom="100%" background="url(https://uploads.quarkly.io/5fd1663d04e716001efc6288/images/d8c10df5ed048448aee90401c1484642.jpg?v=2020-12-10T00:10:43.740Z) 50% 0/cover no-repeat" />
					<Text as="p" margin="20px 0 5px 0">
						At the same time, all Byzantine subjects received the same rights within their class, regardless of their place of residence. The Armenian nobility became a full-fledged part of the Byzantine nobility. In the part of Armenia, which belonged to Byzantium, four provinces were established: Armenia First, Armenia Second, Armenia Third and Armenia Four. In 582, the emperor Mauritius came to power in Byzantium, presumably an Armenian by nationality. In 591, the Byzantine army, led by Mauritius, defeated the Persians and captured most of the territories of Iranian Armenia to Lake Van. So almost the entire ethnic territory of the Armenians went to Byzantium. In 629, the next Armenian Emperor Heraclius conquered the remaining Armenian lands from Iran, united Armenia and granted it broad self-government. In fact, Armenia turned into an independent vassal state under Byzantine protection. In the Middle Ages, religious affiliation was the main criterion for identifying people, and, having received equal rights with the rest of the population of Byzantium, the Armenians saw nothing wrong with the suzerainty of the Christian state. True, the Armenians belonged to the Monophysite church, and most of the other Byzantine subjects belonged to the orthodox, but at that time the disagreements between the churches had not yet reached too deep a degree.{"\n\n"}
					</Text>
				</StackItem>
				<StackItem width="25%" lg-width="50%" sm-width="100%" sm-margin-top="24px">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box height="0" margin="0 0 20px 0" padding-bottom="100%" background="url(https://uploads.quarkly.io/5fd1663d04e716001efc6288/images/Christianity%20reading.jpg?v=2020-12-10T00:10:43.739Z) 50% 0/cover no-repeat" />
					<Text as="p" margin="20px 0 5px 0">
						Meanwhile, far to the south-west of Armenia - among the sultry Arabian sands, the state of the Caliphate, which had just emerged on the basis of a new monotheistic religion, Islam, was gaining strength. Previously, in the Byzantine Empire and Iran, the Arabs were considered semi-savage barbarians, and their country, which lay apart from the most important trade routes of the East, was, as it were, on the sidelines of international politics. The formerly completely disunited Arab tribes living in harsh and inaccessible desert lands were not perceived by the rulers of the advanced powers as a serious force in the Central Asian region, although they often hired Arabs, fearless soldiers, to serve in the army. After the preaching of Islam by the prophet Muhammad (about 570 - 632), the rapid unification of all Arab societies under the spiritual shade of a young religion that recognized the power of only one God and abolished all tribal and social distinctions was a complete surprise for the rulers of Byzantium and Iran. The lack of organization and armament of the Arab Muslim warriors in comparison with the powerful armies of Byzantium and the Sassanids was compensated by their traditional exceptional courage and deepest devotion to the ideals of their religion, the desire to establish divine laws at any cost over the largest part of the entire earth. Spreading Islamic law - Sharia, Arab militias invaded from the south into the Near Asian possessions of Byzantium and Iran, seizing lands.
					</Text>
				</StackItem>
				<StackItem width="25%" lg-width="50%" sm-width="100%" sm-margin-top="24px">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box height="0" margin="0 0 20px 0" padding-bottom="100%" background="url(https://uploads.quarkly.io/5fd1663d04e716001efc6288/images/DarkAges02.jpg?v=2020-12-10T00:10:43.719Z) 50% 0/cover no-repeat" />
					<Text as="p" margin="20px 0 5px 0">
						The armies of the warring great powers could not offer them successful resistance. In 645, the Arabs began to seize Armenia. In the 50s. VII century. the century-old Sassanid empire was completely defeated by Muslim warriors, all of its territories, including Persia itself, became the provinces of the Caliphate, where the Caliph appointed governors. The untold treasures of the Sassanids seized by the Muslims and the advanced technical achievements of Iran became the material base for the further continuation of the Islamic conquests. By 661, the Caliphate had established its rule over the overwhelming majority of the territories of Transcaucasia, which were united into the province of al-Arminiya (Armenia). Its center was the city of Dvin. Despite the name, al-Arminia included not only Armenian lands, but also Georgia and Caucasian Albania (future Azerbaijan). The Armenian prince Theodoros Rshtuni was appointed its first governor. Armenians became subjects of the Muslim state with the rights of dhimmies - who enjoy the patronage of the Islamic ruler - the Caliph, non-Muslims. For this they paid a special tax - jizya. Like all dhimmias, Armenians could not hold leading positions that gave them power over Muslims. The conquered lands, which went to the treasury of the Caliphate, were subject to a land tax - a kharaj, which was paid by the herders and farmers who used them. The caliph appointed governors from the local population - the Ostikans to govern the Transcaucasian province.
					</Text>
				</StackItem>
				<StackItem width="25%" lg-width="50%" sm-width="100%" sm-margin-top="24px">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box height="0" margin="0 0 20px 0" padding-bottom="100%" background="url(https://uploads.quarkly.io/5fd1663d04e716001efc6288/images/M%C3%A2con-Biblioth%C3%A8que-municipale-Ms-1-f.-211-15th-Century.jpg?v=2020-12-10T00:10:43.709Z) 50% 0/cover no-repeat" />
					<Text as="p" margin="20px 0 5px 0">
						There was no systematic ethnic discrimination in the Caliphate: Islam consolidated the assessment of a person according to his religion and did not attach importance to his nationality. Therefore, the Armenians had a significant impact on the development of culture and science in the young empire. The dynasty of Armenian doctors Ibn-Bakhtishu, whose ancestor Jabrail was able to cure Caliph al-Mansur in 765 from a disease, before which all other eminent doctors of the state were powerless, gained wide popularity in the Caliphate. And his grandson and namesake, on the initiative of Caliph Harun al-Rashid, founded the first hospital in Baghdad. At the same time, the Armenian nobility was weighed down by their second-rate position. Repeatedly, especially in the first decades of Muslim rule, she initiated uprisings against the supreme power of the Caliphate. In 705, several hundred rebellious Armenian aristocrats were executed by the Arabs. The part of Armenia, which remained under the rule of Byzantium, was ruled by the governors of Constantinople - the kuropalates, who were actually sovereign rulers in their domains. Ashot I, the first to receive this position, founded the Tao-Klarjeti principality in the Transcaucasus. From him comes the famous Armenian-Georgian clan Bagratuni (Bagrationi), to which the Russian hero of the Patriotic War of 1812 P. Bagration belonged. The Armenian nobility had a great influence at the Byzantine court, and its representatives repeatedly occupied the imperial throne. Emperor John I of Tzimiskes (969 - 976) was also Armenian by nationality, in 971 he defeated the troops of the Russian prince Svyatoslav in Bulgaria.{"\n\n\n\n"}
					</Text>
				</StackItem>
			</Stack>
		</Section>
		<Section
			background="linear-gradient(0deg,rgba(4, 8, 12, 0.6) 0%,rgba(4, 8, 12, 0.6) 100%),--color-darkL2 url(https://uploads.quarkly.io/5fd1663d04e716001efc6288/images/64a748b0d9a70a3c1547e7227e80947e.jpg?v=2020-12-10T00:10:43.702Z) center/cover"
			padding="64px 0"
			sm-padding="40px 0"
			color="--light"
			font="--base"
		>
			<Stack>
				<StackItem width="75%" lg-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
				</StackItem>
			</Stack>
			<Box text-align="center" margin="96px 0 0 0" />
		</Section>
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="center" />
			<Text as="p" font="--lead" margin="20px 0 0 0">
				The Pavlikians who survived the Byzantine persecution fled to Eastern Armenia, which was part of the Caliphate, where they rallied under the leadership of Sumbat Zarehavantsi. Their religious and political center was the village of Tondrak north of Lake Van. The teachings of Sumbat Zarehavantsi, in addition to preaching Pavlikianism, contained a large number of socio-political ideas, so his followers formed a virtually new sect, which, by the name of its center, went down in history as the Tondrakits (Tondrakians). They taught that people should not be divided into common people and know that everyone should equally enjoy earthly goods. Some historians note that their views on social structure and property were close to communist ones. The Tondrakits constantly incited the taxable population to revolt against the nobility and the Armenian Church, and criticized the luxury in which the clergy lived. In the end, the authorities of the Caliphate sent a punitive expedition against them, led by Emir Abu al-Ward. With the support of the squads of the local nobility, Abu-l-Ward defeated the Tondrakites and captured Sumbat Zarekhvantsi, who was then executed. The Tondrakite current itself, however, did not disappear. His followers settled throughout the Transcaucasian province of the Caliphate, including Caucasian Albania, and continued to organize performances by the common people. During the X century. their activities seriously destabilized the internal situation in the Transcaucasus. The activity of the Tondrakits found fertile ground in connection with the strengthening of the positions of the Armenian aristocracy in the lands dependent on the Caliphate during this period. The power of the Caliph gradually fell into decay, and the governors, appanage rulers, including the Armenian princes, gained more and more independence. In 806, Ashot IV of the Bagratuni clan was appointed governor of Transcaucasia. Gathering a significant squad, he expanded the limits of his possessions, winning part of the territories from neighboring Muslim rulers who had gone out of obedience to the caliph. After his death in 826, the Armenian state for some time fell into decay due to feudal fragmentation (the lands of Armenia were divided among themselves by the sons of Ashot) and the raid of the hostile Arab cavalry. However, under Ashot V (862 - 890), the grandson of Ashot IV, the Armenian state was again united and regained its former power. In 885, Caliph Ahmad al-Mutamid recognized Ashot king of Armenia, thus sanctioning the complete internal independence of his state, which became only a tributary of the Caliphate. The independence of Eastern Armenia was also recognized by the Byzantine emperor, who sent Ashot V royal gifts and a crown. However, the young state, naturally, also had ill-wishers who challenged its right to control the Transcaucasian territories. Especially irreconcilable was the enmity between Armenia and the state of the Sajids, which was formed in Azerbaijan - another vassal of the Caliphate, which was losing control over its outlying lands. In 908, the Sajid emir Yusuf, having entered into an alliance with another influential Armenian princely clan Artsruni, recognized the representative of that Khachik-Gagik Vaspurakan as the king of Armenia. With the support of the Sajids, Artsruni established themselves in their possessions in the south and southeast of Armenia, and the unified state again actually split into two parts. In 913, Yusuf with his army, besieging the Bagratid king Smbat I, the son of Ashot V, took him prisoner and a year later crucified him on a cross. However, the son of Smbat I, Ashot Zhelezny, who came to power in 914, was able to consolidate the Armenian nobility, defeated the Sajids and restored order and unity in the country. Under the successors of Ashot Iron and his brother Abbas I (928 - 952), Ashot III (952 - 977), Smbat II (977 - 989) and Gagik I (989 - 1020) medieval Armenia reached its highest power, wealth and cultural prosperity. Under Abbas, its capital was first moved to Kars, and under Ashot - to the city of Ani, located where the border between Armenia and Turkey now passes.
			</Text>
		</Section>
		<Section padding="140px 0" sm-padding="40px 0" background="url(https://uploads.quarkly.io/5fd1663d04e716001efc6288/images/maxresdefault.jpg?v=2020-12-10T00:10:43.708Z) center/cover">
			<Box max-width="240px" padding="50px 80px 80px 50px" background="--color-light" color="--dark">
				<Text font="--base">
					With the accession of the Byzantine order, wealth and prosperity in Armenia was replaced by grief and hardship. The Byzantine governors looked at the country only as a tidbit and imposed unbearable taxes on the people. The higher clergy attracted by the emperor took their side. However, the triumph of the Byzantines from the fulfillment of their old dream was short-lived: the Seljuks firmly established themselves in Persia - formidable and brave warriors who, from 1045, began incessantly to raid Armenia, plundering it. They crushed the Byzantine detachments and local squads who tried to resist them, and they ravaged the country, brutally cracking down on the population who tried to resist. In 1048 the Seljuks completely plundered and burned down the important trading city of Artsn.{" \n\n"}
				</Text>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="center" />
			<Text as="p" font="--lead" margin="20px 0 0 0">
				The Armenians suffered from robbery and violence, and the Byzantine emperors could only bite their elbows, watching how the formerly rich province, to join their state they spent so much time and effort, turns into a poor and problematic region. In 1064 the Seljuks, having defeated the Byzantine garrison, captured Ani. The still independent king of Kars, Gagik-Abbas, frightened by the Seljuks, also abdicated his throne, transferring power to the Byzantine emperor, but it was too late: the Seljuks seized the territory of the Kars kingdom before the Byzantine army managed to arrive there. Wanting to put an end to the expansion of the Seljuk expansion and expel the enemy from such an attractive province, the Byzantine emperor Roman Diogenes himself led the army that entered Armenia. This turned into the final collapse and shame of Byzantium in Transcaucasia: in 1071, in the battle of Manzikert, the Seljuks, led by Sultan Mohammed Ibn-Daud (Alp-Arslan), defeated the Byzantine army, and the emperor was taken prisoner. By the XII century. The Seljuks conquered most of Asia Minor, plunging the heiress of Ancient Rome into irreversible decline. For several decades, individual Armenian aristocrats with their retinues, entrenched in mountain fortresses, still continued desperate resistance to the Seljuks, but gradually the Seljuk Sultanate, dictating the will of the Baghdad caliphs, seized most of the territories of Armenia. Only in the north of the country, the dynasty of the Zakharid princes (Mkhargrdzeli), accepting the suzerainty of the Georgian kingdom that was gaining strength and influence, was able to gain a foothold in the cities of Ani, Lori, Kars and Dvin and, together with the Georgian army, stop the further offensive of the Seljuks, while maintaining relative independence. Since then, in fact, until 1991, Armenia ceased to exist as a single independent state.
			</Text>
		</Section>
		<Section background="--color-light" color="--dark" padding="64px 0">
			<Stack>
				<StackItem width="50%" lg-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Text
						font="--base"
						color="--grey"
						letter-spacing="1px"
						text-transform="uppercase"
						margin="0"
					>
						Contact US
					</Text>
					<Text font="--headline2" max-width="500px" margin="10px 0 0 0">
						Staringstraat 15 Nijmegen, Gelderland(GE), 6521 AJ 06-11279518
					</Text>
				</StackItem>
				<StackItem width="50%" lg-width="100%">
					<Formspree>
						<Stack gap="16px">
							<StackItem width="50%">
								<Override slot="StackItemContent" flex-direction="column" />
								<Text font="--base" margin="0 0 4px 0">
									Name
								</Text>
								<Input max-width="400px" width="100%" name="name" />
							</StackItem>
							<StackItem width="50%">
								<Override slot="StackItemContent" flex-direction="column" />
								<Text font="--base" margin="0 0 4px 0">
									Email
								</Text>
								<Input max-width="400px" width="100%" type="email" name="email" />
							</StackItem>
							<StackItem width="100%">
								<Override slot="StackItemContent" flex-direction="column" />
								<Text font="--base" margin="0 0 4px 0">
									Message
								</Text>
								<Input as="textarea" rows="4" width="100%" name="message" />
							</StackItem>
							<StackItem width="100%">
								<Button>
									Send
								</Button>
							</StackItem>
						</Stack>
					</Formspree>
				</StackItem>
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