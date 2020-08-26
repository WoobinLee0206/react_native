import React, { Component } from "react";

import { View, Image, Text } from "react-native";

// export default class Arin extends Component {
//   render() {
//     const imageSource = {
//       uri: "https://upload2.inven.co.kr/upload/2018/01/15/bbs/i16450891046.gif",
//     };
//     return (
//       <View>
//         <Image source={imageSource} style={{ width: 300, height: 410 }} />
//       </View>
//     );
//   }
// }

export default function Arin(props) {
  const imageSource = {
    uri: "https://upload2.inven.co.kr/upload/2018/01/15/bbs/i16450891046.gif",
  };

  const { width, height } = props;

  return (
    <View>
      <Image
        source={imageSource}
        style={{ width: width || 200, height: height || 200 }}
      />
    </View>
  );
}
