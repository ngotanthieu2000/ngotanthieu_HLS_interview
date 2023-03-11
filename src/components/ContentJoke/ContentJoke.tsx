import React, {useState} from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
const styles = StyleSheet.create({
  container: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 50,
    paddingBottom: 50,
    flexDirection: 'column',
  },
  viewLike: {
    paddingTop: 40,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  jokeContent: {
    fontSize: 12,
  },
  buttonLike: {
    height: 30,
    width: 120,
    backgroundColor: '#2c7edb',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  buttonDisLike: {
    height: 30,
    width: 120,
    backgroundColor: '#29b363',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  contentButton: {
    color: '#ffffff',
  },
});
const data_joke = [
  {
    content: `A child asked his father, "How were people born?" So his father said,
  "Adam and Eve made babies, then their babies became adults and made
  babies, and so on."The child then went to his mother, asked her the same
  question and she told him, "We were monkeys then we evolved to become
  like we are now."The child ran back to his father and said, "You lied to
  me!" His father replied, "No, your mom was talking about her side of the
  family.`,
    watched: false,
  },
  {
    content:
      'Teacher: "Kids,what does the chicken give you?" Student: "Meat!" Teacher: "Very good! Now what does the pig give you?" Student: "Bacon!" Teacher: "Great! And what does the fat cow give you?" Student: "Homework!"',
    watched: false,
  },
  {
    content: `The teacher asked Jimmy, "Why is your cat at school today Jimmy?" Jimmy replied crying, "Because I heard my daddy tell my mommy, 'I am going to eat that pussy once Jimmy leaves for school today!'"`,
    watched: false,
  },
  {
    content: `A housewife, an accountant and a lawyer were asked "How much is 2+2?" The housewife replies: "Four!". The accountant says: "I think it's either 3 or 4. Let me run those figures through my spreadsheet one more time." The lawyer pulls the drapes, dims the lights and asks in a hushed voice, "How much do you want it to be?"`,
    watched: false,
  },
];
export default function ContentJoke() {
  const [indexJoke, setIndexJoke] = useState(0);
  const touchLikeButton = () => {
    if (indexJoke == data_joke.length - 1) {
      Alert.alert(`That's all the jokes for today! Come back another day!`);
    } else {
      setIndexJoke(indexJoke + 1);
    }
  };
  const touchDisLikeButton = () => {
    if (indexJoke == data_joke.length - 1) {
      Alert.alert(`That's all the jokes for today! Come back another day!`);
    } else {
      setIndexJoke(indexJoke + 1);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.jokeContent}>{data_joke[indexJoke].content}</Text>
      <View style={styles.viewLike}>
        <View style={styles.buttonLike} onTouchEnd={() => touchLikeButton()}>
          <Text style={styles.contentButton}>This is Funny!</Text>
        </View>
        <View style={styles.buttonDisLike} onTouchEnd={touchDisLikeButton}>
          <Text style={styles.contentButton}>This is not funny.</Text>
        </View>
      </View>
    </View>
  );
}
