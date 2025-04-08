import React ,{useState,useEffect} from "react";
import { Pressable, SafeAreaView, Text, View ,ScrollView, Image } from "react-native";

import Header from "../../components/Header/Header";

import globalStyle from "../../assets/styles/globalStyle";
import style from "./style";
import Button from "../../components/Button/Button";
import Tab from "../../components/Tab/Tab";
import Badge from "../../components/Badge/Badge";

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Search from "../../components/Search/Search";
import SingleDonationItem from "../../components/SingleDonationItem/SingleDonationItem";
import { horizontalScale } from "../../assets/styles/scaling";

import { useDispatch, useSelector } from "react-redux";
import { FlatList } from "react-native-gesture-handler";
import { updateSelectedCategoryId } from "../../redux/reducers/Categories";
import { resetDonations, updateSelectedDonationId } from "../../redux/reducers/Donations";
import { validatePathConfig } from "@react-navigation/native";
import { Routes } from "../../navigation/Routes";


const Home=({navigation})=>{
    const user=useSelector(state=>state.user);
    const dispatch=useDispatch();
    console.log(user);
    const categories=useSelector(state=>state.categories);
    // console.log(categories);
    const donations=useSelector(state=>state.donations)

    //dispatch(resetDonations());  //or need to use persitor.purge() in store
    //console.log('this is our current donations state',donations)

    const [donationItems,setDonationsItems]=useState([]);
    const [categoryPage, setCategoryPage] = useState(1);
    const [categoryList, setCategoryList] = useState([]);
    const [isLoadingCategories, setIsLoadingCategories] = useState(false);
    const categoryPageSize = 4;

    useEffect(()=>{
        const items=donations.items;
        //console.log(items);   displaying all items
        const filteredItems=items.filter((val)=>
            val.categoryIds.includes(categories.selectedCategoryId),
        );
        setDonationsItems(filteredItems);
        // console.log(filteredItems)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[categories.selectedCategoryId]);

    useEffect(() => {
      setIsLoadingCategories(true);
      setCategoryList(
        pagination(categories.categories, categoryPage, categoryPageSize),
      );
      setCategoryPage(prev => prev + 1);
      setIsLoadingCategories(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    //console.log(categoryList.length)

    const pagination = (items, pageNumber, pageSize) => {
      const startIndex = (pageNumber - 1) * pageSize;
      const endIndex = startIndex + pageSize;
      if (startIndex >= items.length) {
        return [];
      }
      return items.slice(startIndex, endIndex);
    };

    return(
        <SafeAreaView style={[globalStyle.backGroundWhite,globalStyle.flex]}>
            <Text></Text>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={style.header}>
                    <View style={style.username}>
                    <Text style={style.headerIntroText}>Hello,</Text>
                        <Header title={user.displayName +'. 👋'} />
                    </View>
                    <Image 
                        source={{uri:user.profileImage}} 
                        style={style.profileImage}
                        resizeMode={'contain'}
                    />
                </View>
                <View style={style.searchBox}>
                    <Search placeHolder='Search' />
                </View>
                <Pressable style={style.highlightedImageContainer}>
                    <Image 
                        style={style.highlightedImage}
                        source={require('../../assets/images/highlighted_image.png')} 
                        resizeMode={'contain'}
                    />
                </Pressable>
                <View style={style.categoryHeader}>
                    <Header title={'Select Category'} type={2} />
                </View>
                <View style={style.categories}>
                    <FlatList
                        onEndReachedThreshold={0.5}
                        onEndReached={() => {
                          if (isLoadingCategories) {
                            return;
                          }
                        //   console.log(
                        //     'User has reached the end and we are getting more data for page number ',
                        //     categoryPage,
                        //   );
                          setIsLoadingCategories(true);
                          let newData = pagination(
                            categories.categories,
                            categoryPage,
                            categoryPageSize,
                          );
                          if (newData.length > 0) {
                            setCategoryList(prevState => [...prevState, ...newData]);
                            setCategoryPage(prevState => prevState + 1);
                          }
                          setIsLoadingCategories(false);
                        }}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={categoryList}
                        renderItem={({item})=>
                            <View
                                style={style.categoryItem}
                                key={item.categoryId}
                            >
                            <Tab 
                                title={item.name}
                                onPress={(val)=>dispatch(updateSelectedCategoryId(val))}
                                isInactive={item.categoryId !== categories.selectedCategoryId}
                                tabId={item.categoryId}
                            />
                            </View>
                        }
                    />
                </View>
                {donationItems.length>0 && <View style={style.donationItemsContainer}>
                        {donationItems.map(value=>{
                            const categoryInformation=categories.categories.find(
                                val=>val.categoryId === categories.selectedCategoryId,
                            );
                            return(
                                <View 
                                    key={value.donationItemId}
                                    style={style.singleDonationItem}
                                >
                                    <SingleDonationItem
                                        price={parseFloat(value.price)}
                                        badgeTitle={
                                            // categories.categories.filter(
                                            //     val=>val.categoryId === categories.selectedCategoryId,
                                            // )[0].name
                                            categoryInformation.name
                                        }
                                        donationTitle={value.name}
                                        uri={value.image}
                                        donationItemId={value.donationItemId}
                                        onPress={selectedDonationId=>{
                                            //console.log(selectedDonationId);
                                            dispatch(updateSelectedDonationId(selectedDonationId));
                                            navigation.navigate(Routes.SingleDonationItem,{
                                                categoryInformation
                                            });
                                        }}
                                    />
                                </View>);
                        })}
                </View>}
            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;