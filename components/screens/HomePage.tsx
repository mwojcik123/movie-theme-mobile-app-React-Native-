import React, {Component, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  StatusBar,
  Button,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  COLORS,
  SIZES,
  FONTS,
  BORDERRADIUS,
  MARGIN_PADDING,
} from '../assets/style-theme';
import {connect} from 'react-redux';
import {elo} from '../actions/videos-actions';
// interface AppProps {}
interface Props {
  search: string;
}

class HomePage extends Component<any, Props> {
  constructor(props: {}) {
    super(props);
    this.state = {
      search: '',
    };
    this.clearSearchField = this.clearSearchField.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(): void {
    this.props.elo();
  }

  handleClick(e: any) {
    this.setState({search: e});
  }

  clearSearchField(e: any) {
    this.setState({search: ''});
  }
  // const [search, setSearch] = useState<string>('');
  // const [searchText, setSearchText] = useState<string>('');
  render() {
    return (
      <SafeAreaView style={styles.fdf}>
        <StatusBar animated={true} backgroundColor={COLORS.black} />
        <View style={styles.appBarWrapper}>
          <View style={styles.appBar}>
            <Text style={styles.textEvent}>MyTube</Text>
          </View>
        </View>
        <View style={styles.inputBox}>
          <TextInput
            name="search"
            value={this.state.search}
            style={styles.textInput}
            placeholder="Search..."
            placeholderTextColor={COLORS.grey}
            onChangeText={this.handleClick}
          />
          <View style={styles.iconContainer}>
            <TouchableOpacity style={styles.searchIcon}>
              <AntDesign
                name="search1"
                color={COLORS.white}
                size={SIZES.size_28}
              />
            </TouchableOpacity>
            {this.state.search == '' ? null : (
              <TouchableOpacity
                activeOpacity={0.1}
                style={styles.searchIcon}
                onPress={this.clearSearchField}>
                <AntDesign
                  name="closecircle"
                  color={COLORS.red}
                  size={SIZES.size_22}
                />
              </TouchableOpacity>
            )}
          </View>
        </View>
        <ScrollView style={styles.headerTitle}>
          <Text style={styles.textEvent}>sdas: {this.props.count}</Text>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state: any) => ({
  count: state.videos.count,
});

export default connect(mapStateToProps, {elo})(HomePage);

const styles = StyleSheet.create({
  fdf: {
    backgroundColor: COLORS.black,
    height: '100%',
  },
  textEvent: {
    fontSize: SIZES.size_18,

    color: COLORS.white,
    fontFamily: FONTS.light,
  },
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'space-evenly',
  },
  appBarWrapper: {
    paddingHorizontal: MARGIN_PADDING.mp_18,
    paddingVertical: MARGIN_PADDING.mp_18,
    backgroundColor: COLORS.black,
  },
  headerTitle: {
    marginHorizontal: SIZES.size_18,
    marginVertical: SIZES.size_8,
  },
  textTitle: {
    fontSize: SIZES.size_50,
    fontWeight: '500',
    color: COLORS.white,
    fontFamily: FONTS.bold,
  },
  iconContainer: {
    width: '20%',
    direction: 'rtl',
    flexDirection: 'row-reverse',
    flexWrap: 'nowrap',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  appBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputBox: {
    display: 'flex',
    paddingVertical: MARGIN_PADDING.mp_2,
    paddingHorizontal: MARGIN_PADDING.mp_8,
    marginHorizontal: MARGIN_PADDING.mp_12,
    borderWidth: 1,
    borderColor: COLORS.grey,
    borderRadius: BORDERRADIUS.radius_25,
    flexDirection: 'row',
  },
  textInput: {
    width: '80%',
    color: COLORS.white,
  },
  searchIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: MARGIN_PADDING.mp_4,
  },
});
