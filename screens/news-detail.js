import { Heading, Text, Image, ScrollView } from "native-base";
import { Header } from "../components";
import { Box } from "native-base";

const NewsDetail = ({ route }) => {
  // Get the params
    const params = route.params.item;
    return (
        <>
            <Header title={"News"} withBack="true" />
            <ScrollView>
                <Image source={{ uri: params.image }} 
                    w="full"
                    h="250"
                    alt="Image artikel"
                />
                <Text p={'4'}>{params.date}</Text>
                <Heading pl={'4'} pr={'4'}>{params.title}</Heading>
                
                <Box 
                    borderBottomColor={"coolGray.300"}
                    borderBottomWidth={2}
                    flexDirection="row"
                    m={'4'}
                />
                <Text p={'4'}>{params.content}</Text>
            </ScrollView>
        </>
    );
};

export default NewsDetail;

// KODE PROGRAM SEBELUM DIUBAH
// import { Heading, Center, Text } from "native-base";
// import { Header } from "../components";

// const NewsDetail = ({ route }) => {
//   // Get the params
// const params = route.params.item;
//     return (
//         <>
//         <Header title={"News"} withBack="true" />
//         <Center flex={1} p={"4"}>
//             <Heading>News Detail</Heading>
//             <Text textAlign={"center"}>{params.title}</Text>
//         </Center>
//         </>
//     );
// };

// export default NewsDetail;



