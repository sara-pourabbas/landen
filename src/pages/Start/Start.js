import React from 'react';
import {Container, Row, Col, Button,Input} from 'reactstrap';
import {Step} from "../../components/common/Step";
import {MobileVersion} from "../../components/common/MobileVersion";
import {ItemWithIcon} from "../../components/common/ItemWithIcon";
import {ItemWithoutIcon} from "../../components/common/ItemWithoutIcon";
import {ItemMedium} from "../../components/common/ItemMediun";
import {Illustration} from "../../components/common/Illustration";
import {NextStepButton} from "../../components/common/NextStepButton";
import {ArrowButton} from "../../components/common/ArrowButton";
import {Spectrum} from "../../components/common/Spectrum";
import {FormBoxUpload} from "../../components/common/FormBoxUpload";
import {FormBoxHead} from "../../components/common/FormBoxHead";
import {FormBoxLabel} from "../../components/common/FormBoxLabel";
import {RectanglePosition} from "../../components/common/RectanglePosition";
import {FormBoxTitle} from "../../components/common/FormBoxTitle";
import {FormBoxInput} from "../../components/common/FormBoxInput";
import {FormBoxTextarea} from "../../components/common/FormBoxTextarea";
import {Adding} from "../../components/common/Adding";
import {ViewDemo} from "../../components/common/ViewDemo";
import {RectangleItem} from "../../components/common/RectangleItem";
import {VisualIdentity} from "../../components/common/VisualIdentity";
import {AddButton} from "../../components/common/AddButton";
import {FormBoxFontSize} from "../../components/common/FormBoxFontSize";
import {StepSection} from "../../components/common/StepSection";
import {toPersianDigits} from "../../components/common/toPersianDigit";
import {ConvertDigitToPersian} from "../../components/common/ConvertDigittoPersian";
import {InsidePackage} from "../../components/common/InsidePackage";
import {FormBoxSubTitle} from "../../components/common/FormBoxSubTitle";
import {AddComment} from "../../components/common/AddComment";
import {AddLogo} from "../../components/common/AddLogo";
import {UploadBox} from "../../components/common/UploadBox";
import {AddMember} from "../../components/common/AddMember";
import {AddQuestion} from "../../components/common/AddQuestion";
import {AddField} from "../../components/common/AddField";
import {AddLink} from "../../components/common/AddLink";
import {AddFeature} from "../../components/common/AddFeature";
import {ScrollUp} from "../../components/common/ScrollUp";

//import Board from "@lourenci/react-kanban";

export default class Start extends React.Component {
    constructor(props){
        super(props);
        //CheckToken(props);
        this.state={
            activeMenuHeader:null,
            header:true,
            positionHeader:null,
            file: '',
            appendCommentCount:0,
            imagePreviewUrl: '',
            addLink:0,
            addFeature:0,
            addComment:0,
            addLogo:0,
            addButton:0,
            addField:0,
            addQuestion:0,
            addMember:0,
            //isScrollUp:false,
            typeArray:[
                {
                    title:'کمپین مشترک',
                    img:'collaboration'
                },
                {
                    title:'خبرنامه ایمیلی',
                    img:'email'
                },
                {
                    title:'معرفی محصول',
                    img:'product'
                },
                {
                    title:'معرفی کتاب',
                    img:'book'
                },
                {
                    title:' رویداد ',
                    img:'event'
                },
                {
                    title:'کمپین تخفیف',
                    img:'offer'
                },
                {
                    title:' معرفی اپ ',
                    img:'app'
                },
                {
                    title:' سایر ',
                    img:'other'
                },
            ],
            topicArray:[
                {
                    title:'فروشگاهی',
                    img:'shop'
                },
                {
                    title:'پزشکی',
                    img:'heath'
                },
                {
                    title:'ورزشی',
                    img:'sport'
                },
                {
                    title:'کسب و کارها' ,
                    img:'business'
                },
                {
                    title:'موسیقی',
                    img:'music'
                },
                {
                    title:'آموزشی',
                    img:'student'
                },
                {
                    title:'کودک و نوجوان',
                    img:'kids'
                }
                ,{
                    title:'فیلم و سینما',
                    img:'cinema'
                },
                {
                    title:'طبیعت',
                    img:'leaf'
                },
                {
                    title:'سفر',
                    img:'pin'
                },
                {
                    title:'غذا و نوشیدنی',
                    img:'food'
                },
                {
                    title:'بازی',
                    img:'game'
                }
            ],
            contentArray:[ 'عنوان' ,  'متن' , 'مرحله به مرحله' , 'امکانات' ,
                'قیمت گذاری' , 'توصیه نامه' , 'لوگو ها' , 'جمع آوری لید' ,
                'فراخوانی - CTA' , 'رسانه' , 'تیم' , 'سوالات متداول' ],
            // styleArray:[
            //     {title:'تصویرسازی'},{title:'موک آپ',soon:''},{title:'هیچ کدام'}
            // ],
            illustrationArray:[
                {
                    title:' مدل یک',
                    img:'say_good_day'
                },
                {
                    title:' مدل دو',
                    img:'model'
                },
                {
                    title:' مدل سه',
                    img:'ship'
                },
            ],
            fontArray:['وزیر' , 'شبنم' , 'انجمن'],
            colorArray:[
                {title:'قرمز' , color:'red' },
                {title:'نارنجی' , color:'orange' },
                {title:'زرد' , color:'yellow' },
                {title:'سبز' , color:'green' },
                {title:'صورتی' , color:'pink' },
                {title:'آبی' , color:'blue' },
                {title:'بنفش' , color:'purple' },
                {title:'خاکستری' , color:'gray' }
            ],
            sections:[
                {name:'sectionTitle',order:1},{name:'sectionText',order:2},
                {name:'sectionByStep',order:3},{name:'sectionFeatures',order:4},
                {name:'sectionPricing',order:5},{name:'sectionTestimonials',order:6},
                {name:'sectionPeresLogo',order:7},{name:'sectionCTABox',order:8},
                {name:'sectionLeadCaptured',order:9},{name:'sectionMedia',order:10},
                {name:'sectionFAQ',order:11},{name:'sectionTeam',order:12}
            ],
            addSection:[],
            setColor:null
        };
        //creates a reference for your element to use
        this.stepTwo = React.createRef();
        this.stepThree = React.createRef();
        this.stepFour = React.createRef();
        this.stepFive = React.createRef();
        this.stepSix = React.createRef();
        this.stepSeven = React.createRef();
        this.sectionHeader = React.createRef();
        this.sectionTitle = React.createRef();
        this.sectionText = React.createRef();
        this.sectionByStep = React.createRef();
        this.sectionFeatures = React.createRef();
        this.sectionPricing = React.createRef();
        this.sectionTestimonials = React.createRef();
        this.sectionPeresLogo = React.createRef();
        this.sectionCTABox = React.createRef();
        this.sectionLeadCaptured = React.createRef();
        this.sectionMedia = React.createRef();
        this.sectionFAQ = React.createRef();
        this.sectionTeam = React.createRef();
    }
    //for upload image
    handleImageChange=(e,name,preview)=> {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
        reader.onloadend = () => {
            this.setState({
                [name]: file,
                [preview]: reader.result
            });
        };
        reader.readAsDataURL(file)
    };
    handleOnClick = (ref) => {
        //.current is verification that your element has rendered
        if(ref.current){
            ref.current.scrollIntoView({behavior: "smooth", inline: "nearest"});
        }
    };
    // handle active top menu
    handleActiveMenuHeader = (activeMenuHeader)=>{
            this.setState({activeMenuHeader})
    };

    //Activate after selecting any item
    handleSelect = (field,value)=>{
        this.setState({
            [field]:value
        })
    };
    //Create step section in StepByStep And
    //Create section in Features
    generateStepSection=(state,sectionTitle,stepByStep)=>{
        let count = 0;
        switch (state) {
            case  1:
                count += 3;//create 3 StepSection
                break;
            case 2:
                count += 4;//create 4 StepSection
                break;
            case 3:
                count += 6;//create 6 StepSection
                break;
        }
        const arr=[];
        for(let i = 1; i<=count ; i++){
            arr.push( <StepSection sectionTitle={sectionTitle} countSection={ConvertDigitToPersian(i)} stepByStep={stepByStep} />)
        }
        return arr;
    };
    //Create package in Pricing
    generateInsidePackage=(state,sectionTitle)=>{
        let count = 0;
        switch (state) {
            case  1:
                count += 2;//create 2 InsidePackage
                break;
            case 2:
                count += 3;//create 3 InsidePackage
                break;
            case 3:
                count += 4;//create 4 InsidePackage
                break;
        }
        const arr=[];
        for(let i = 1; i<=count ; i++){
            arr.push( <InsidePackage packageTitle={sectionTitle}
                                     packageCount={ConvertDigitToPersian(i)}
                                     addClick={()=>this.addingClick('addFeature')}
                                     generateFeature={this.generateFeature(this.state.addFeature)}
            />)
        }
        return arr;
    };
    //adding state for add component
    addingClick=(field)=>{
        this.setState({
            [field]:this.state[field]+1
        })
    };
    //Create AddLink Component
    generateLink=(state)=>{
        const arr=[];
        for(let i = 1; i<=state ; i++){
            arr.push( <AddLink key={i} />)
        }
        return arr;
    };
    //Create AddFeature Component
    generateFeature=(state)=>{
        const arr=[];
        for(let i = 1; i<=state ; i++){
            arr.push( <AddFeature key={i} />)
        }
        return arr;
    };
    //Create AddComment Component
    generateComment=(state)=>{
        const arr=[];
        for(let i = 1; i<=state && i<=7 ; i++){ //Maximum 8
            arr.push(  <AddComment key={i} />)
        }
        return arr;
    };
    //Create AddLogo Component
    generateLogo=(state)=>{
        const arr=[];
        for(let i = 1; i<=state && i<=8 ; i++){//Maximum 9
            arr.push( <AddLogo key={i} />)
        }
        return arr;
    };
    //Create AddButton Component
    generateButton=(state)=>{
        const arr=[];
        for(let i = 1; i<=state && i<=1 ; i++){//Maximum 2
            arr.push( <AddButton key={i} />)
        }
        return arr;
    };
    //Create AddField Component
    generateField=(state)=>{
        const arr=[];
        for(let i = 1; i<=state && i<=2 ; i++){//Maximum 3
            arr.push( <AddField key={i} />)
        }
        return arr;
    };
    //Create AddQuestion Component
    generateQuestion=(state)=>{
        const arr=[];
        for(let i = 1; i<=state && i<=4 ; i++){//Maximum 5
            arr.push( <AddQuestion key={i} />)
        }
        return arr;
    };
    //Create AddMember Component
    generateMember=(state)=>{
        const arr=[];
        for(let i = 1; i<=state && i<=7 ; i++){//Maximum 8
            arr.push( <AddMember key={i} />)
        }
        return arr;
    };

    addSection=(state)=>{
      if(this.state.addSection.includes(state)){
          this.setState(prevState => ({
              addSection:prevState.addSection.filter(a=> a!==state),
          }),()=> console.log('remove this.state.addSection',this.state.addSection))
      }
      else{
          this.setState(prevState => ({
              addSection: [...prevState.addSection,state]
          }),()=> console.log('add this.state.addSection',this.state.addSection))
      }

      return this.state.addSection;
    };

    componentDidMount() {
        this.handleSelect('disableBtnType', true);
        this.handleSelect('disableBtnTopic', true);
        this.handleSelect('disableBtnContent', true);
        this.handleSelect('disableBtnStyle', true);
        this.handleSelect('disableBtnFontColor', true);
    }

    handleOrderSection=()=>{

    };



    render(){

        const {typeArray,topicArray,contentArray,illustrationArray,colorArray,fontArray} = this.state;
        return(
            <Container fluid={true} className='p-0 start'>
                <MobileVersion />
                <Row className='start-container'>
                    <Col className='p-0'>
                        <div className='section align-items-center'>
                            <h2 className='section-title'>
                                لندینگ پیج خودت رو بساز
                            </h2>
                            <div className='section-sub-title mt-3'>
                                برای ساخت لندینگ پیج به سوالات زیر پاسخ دهید
                            </div>
                            <div className='text-center'>
                                <Button className='start-button' onClick={()=>{
                                    this.handleOnClick( this.stepTwo)

                                }}>  شروع کنید  </Button>
                            </div>
                            <ArrowButton disabled={false} />
                        </div>

                        <div className='section stepTwo pt-6 align-items-center' ref={this.stepTwo}>
                            <h2 className='section-title'>
                                نوع صفحه فرود را انتخاب کنید
                            </h2>
                            <div className='section-sub-title mt-3'>
                                صفحه فرود شما در کدام دسته بندی زیر است ؟
                            </div>
                            <Row className='mt-4 select-row'>
                                {
                                    typeArray.map((el,i)=>{
                                        return(<>
                                            <ItemWithIcon key={i+1}
                                                          selectType={this.state.selectType===i+1}
                                                          onClick={()=>{this.handleSelect('selectType',i+1);
                                                                         this.handleSelect('disableBtnType',false)}}
                                                          alt={el.title}
                                                          pic={this.state.selectType===i+1 ? el.img+'-click':el.img}
                                                          title={el.title}
                                            />
                                        </>
                                        )
                                    })
                                }
                            </Row>
                            <div className='text-center '>
                                <NextStepButton disabled={this.state.disableBtnType}
                                                onClick={()=>{this.handleOnClick(this.stepThree);
                                                    this.handleActiveMenuHeader(1)}} />
                            </div>
                            <ArrowButton disabled={this.state.disableBtnType} />
                        </div>

                        {/*{this.state.disableBtnType === false &&*/}
                        <div className='section stepThree pt-6 align-items-center' ref={this.stepThree}>
                            <div className='section-title'>
                                موضوع فعالیت شما در کدام دسته بندی زیر است ؟
                            </div>
                            <div className='section-sub-title mt-3'>
                                صفحه فرود شما در کدام دسته بندی زیر است ؟
                            </div>
                            <Row className='mt-4 select-row'>
                                {
                                    topicArray.map((el,i)=>{
                                        return(
                                            <ItemWithIcon key={i+1}
                                                          selectType={this.state.selectTopic===i+1}
                                                          onClick={()=>{this.handleSelect('selectTopic',i+1);
                                                              this.handleSelect('disableBtnTopic',false)}}
                                                          alt={el.title}
                                                          pic={this.state.selectTopic===i+1 ? el.img+'-click':el.img}
                                                          title={el.title}
                                            />
                                        )
                                    })
                                }
                            </Row>
                            <div className='text-center '>
                                <NextStepButton disabled={this.state.disableBtnTopic}
                                                onClick={()=>{this.handleOnClick(this.stepFour);
                                                    this.handleActiveMenuHeader(2)}} />
                            </div>
                            <ArrowButton disabled={this.state.disableBtnTopic } />
                        </div>
                      {/*}*/}


           <Container className={'px-0 pt-6 mt-5'}>
               <Row>
                   <Col md={6} >
                       <div className='section stepFour ' ref={this.stepFour}>
                           <div className=' medium-title'>
                               می خواهید صفحه فرود شما چه بخش هایی داشته باشد؟
                           </div>
                           <div className='w-100 d-flex flex-wrap'>
                               {
                                   contentArray.map((el,i)=>{
                                       if((i+1) % 5 ==0){ //Displaying 5 items per line
                                           return(
                                               <Row className='mr-20'>
                                                   <ItemWithoutIcon key={i + 1}
                                                                    selectType={this.state.addSection.includes( i + 1)}
                                                                    onClick={() => {
                                                                        this.addSection(i + 1);
                                                                        this.handleSelect('disableBtnContent',false);
                                                                    }}
                                                                    title={el}
                                                   />
                                               </Row>
                                           )
                                       }
                                       else{
                                           return(
                                               <ItemWithoutIcon key={i + 1}
                                                                selectType={this.state.addSection.includes( i + 1)}
                                                                onClick={() => {
                                                                this.addSection(i + 1);
                                                                this.handleSelect('disableBtnContent',false);
                                                                }}
                                                                title={el}
                                               />
                                           )
                                       }
                                   })
                               }
                               </div>
                           <NextStepButton disabled={this.state.disableBtnContent}
                                           onClick={()=>this.handleOnClick(this.stepFive)}/>
                           <ArrowButton disabled={this.state.disableBtnContent} />

                       </div>

                       <div className='section stepFive ' ref={this.stepFive}>
                           <div className=' medium-title'>
                               سبک دیزاین صفحه فرودت میخوای چه شکلی باشه ؟
                           </div>
                           <div className='w-100 d-flex flex-wrap mt-4'>
                               <ItemMedium title={'تصویرسازی'}
                                           selectType={this.state.selectStyle===1}
                                           onClick={()=>this.handleSelect('selectStyle',1)}
                               />
                               <ItemMedium title={'موک آپ'} soon={' بزودی '}
                                           opacity={'opacity-40'}
                               />
                               <ItemMedium title={'هیچکدام'}
                                           selectType={this.state.selectStyle===2}
                                           onClick={()=>this.handleSelect('selectStyle',2)}
                               />
                           </div>
                           {
                               this.state.selectStyle===1 &&
                               <div>
                                   <div className=' sub-medium-title mt-5'>
                                       نوع تصویر سازی را انتخاب کنید
                                   </div>
                                   <div className='d-flex mt-3'>
                                       {
                                           illustrationArray.map((el,i)=>{
                                               return(
                                                   <Illustration key={i+1}
                                                                 selectType={this.state.selectIllustration===i+1}
                                                                 onClick={()=>{this.handleSelect('selectIllustration',i+1);
                                                                 this.handleSelect('disableBtnStyle',false)
                                                                 }}
                                                                 alt={el.title}
                                                                 pic={this.state.selectIllustration===i+1 ? el.img:el.img}
                                                                 title={el.title}
                                                   />
                                               );
                                           })
                                       }
                                       </div>
                               </div>
                           }
                           <NextStepButton disabled={this.state.disableBtnStyle}
                                           onClick={()=>{this.handleOnClick(this.stepSix);}}/>
                           <ArrowButton disabled={this.state.disableBtnStyle} />
                        </div>

                       <div className='section stepSix ' ref={this.stepSix}>
                           <div className=' medium-title'>
                               فونت و رنگ بندی
                           </div>
                           <div className=' sub-medium-title mt-3'>
                               نوع فونت را انتخاب کنید
                           </div>
                           <div className='w-100 d-flex flex-wrap '>
                               {
                                   fontArray.map((el,i)=>{
                                       return(
                                           <ItemMedium key={i+1} title={el}
                                                       selectType={this.state.selectFont===i+1}
                                                       onClick={()=>this.handleSelect('selectFont',i+1)}
                                           />
                                       )
                                   })
                               }
                               </div>
                           <div className=' sub-medium-title mt-5'>
                               نوع رنگ بندی را انتخاب کنید
                           </div>
                           <div className='w-400 d-flex flex-wrap '>
                               {
                                   colorArray.map((el,i)=>{
                                       if((i+1) % 4 == 0){ //Displaying 4 items per line
                                           return(
                                               <Row className='mr-20'>
                                                   <ItemMedium key={i+1} title={el.title}
                                                               selectColorType={this.state.selectColor===i+1}
                                                               colorType={el.color}
                                                               onClick={()=>{this.handleSelect('selectColor',i+1);
                                                               this.handleSelect('disableBtnFontColor',false)}}
                                                   />
                                               </Row>
                                           )
                                       }else{
                                           return(
                                               <ItemMedium key={i+1} title={el.title}
                                                           selectColorType={this.state.selectColor===i+1}
                                                           colorType={el.color}
                                                           onClick={()=>{this.handleSelect('selectColor',i+1);
                                                           this.handleSelect('disableBtnFontColor',false)}}
                                               />
                                           )
                                       }
                                   })
                               }
                               </div>
                           {
                               this.state.selectColor=== 1 &&
                               <Spectrum />
                           }
                           <div className='w-400'>
                               <NextStepButton disabled={this.state.disableBtnFontColor}
                                               onClick={()=>this.handleOnClick(this.stepSeven)}/>
                               <ArrowButton disabled={this.state.disableBtnFontColor} />
                           </div>
                        </div>

                       <div className='section stepSeven' ref={this.stepSeven}>
                           <div className=' medium-title'>
                               متا تگ صفحه فرود خود را جهت بهینه سازی سئو وارد کنید
                           </div>
                           <div className='form-box mt-3'>
                               <FormBoxHead metaTag={'متاتگ'} />
                               <FormBoxUpload title={'آیکون نشانگر وب خود را اپلود کنید'}
                                              imagePreviewUrl={this.state.webIconPreview}
                                              onChange={(e)=>this.handleImageChange(e,'webIcon','webIconPreview')}
                               />
                               <div className='my-3'>
                                   <FormBoxInput placeholder={'عنوان صفحه فرود را وارد کنید'} />
                                   <FormBoxTextarea placeholder={'توضیحات'} />
                               </div>
                               <FormBoxUpload title={'تصویر شبکه اجتماعی'}
                                              imagePreviewUrl={this.state.socialImagePreview}
                                              onChange={(e)=>this.handleImageChange(e,'socialImage','socialImagePreview')}
                               />
                           </div>
                        </div>

                       <div className='section sectionHeader ' ref={this.sectionHeader}>
                           <div className='form-box mt-4'>
                               <FormBoxHead title={'Header#'} menuAndArrow={true} />
                               <FormBoxUpload title={'لوگو هدر را آپلود کنید'}
                                              imagePreviewUrl={this.state.webIconPreview}
                                              onChange={(e)=>this.handleImageChange(e,'webIcon','webIconPreview')}
                               />
                               <div className='my-4'>
                                   <RectanglePosition  />
                               </div>
                               <div className='my-4'>
                                   <FormBoxTitle title={'لینک ها'} />
                                   <AddLink  />
                                   {this.generateLink(this.state.addLink)}
                                   <div className='adding-box'>
                                       <Adding title={'لینک'} onClick={()=>this.addingClick('addLink')}/>
                                   </div>
                               </div>
                               <div className='my-4'>
                                   <FormBoxFontSize box={'header'}/>
                               </div>
                           </div>
                           <ScrollUp />
                       </div>

                       {
                           this.state.sections.sort(a=>a.order).map((el,i) =>{
                               return(
                                   <div>
                                       {
                                           this.state.addSection.includes(1) &&
                                           <div className='section sectionTitle '  ref={this.sectionTitle}>
                                               <div className='form-box mt-4'>
                                                   <FormBoxHead title={'Title#'} menuAndArrow={true}
                                                                arrowDownClick={this.handleOrderSection()}
                                                                arrowUpClick={this.handleOrderSection()}
                                                   />
                                                   <div className='my-4'>
                                                       <FormBoxInput placeholder={'عنوان اصلی'} />
                                                       <FormBoxInput placeholder={'زیر عنوان'} />
                                                       <RectanglePosition  />
                                                   </div>
                                                   <div className='my-4'>
                                                       <FormBoxFontSize box={'title'} />
                                                   </div>
                                               </div>
                                               <ScrollUp />
                                           </div>
                                       }

                                       {
                                           this.state.addSection.includes(2) &&
                                           <div className='section sectionText pt-6' ref={this.sectionText}>
                                               <div className='form-box mt-4'>
                                                   <FormBoxHead title={'Text#'} menuAndArrow={true}/>
                                                   <div className='my-4'>
                                                       <FormBoxTitle title={'محتوا'}/>
                                                       <FormBoxInput placeholder={'عنوان اصلی'}/>
                                                       <FormBoxTextarea placeholder={'توضیحات'}/>
                                                       <RectanglePosition/>
                                                   </div>
                                                   <div className='my-4'>
                                                       <VisualIdentity box={'text'} visual={'model'}/>
                                                   </div>
                                                   <div className='my-4'>
                                                       <AddButton/>
                                                   </div>
                                                   <div className='my-4'>
                                                       <FormBoxFontSize box={'text'}/>
                                                   </div>
                                               </div>
                                               <ScrollUp/>
                                           </div>
                                       }

                                       {
                                           this.state.addSection.includes(3) &&
                                           <div className='section sectionByStep pt-6' ref={this.sectionByStep}>
                                               <div className='form-box mt-4'>
                                                   <FormBoxHead title={'StepByStep#'} menuAndArrow={true} />
                                                   <div className='my-4 d-flex'>
                                                       <FormBoxLabel title='تعداد مرحله' />
                                                       {
                                                           ['سه' , 'چهار' , 'شش'].map((el,i)=>{
                                                               return(
                                                                   <RectangleItem title={el} key={i+1}
                                                                                  selectItem={this.state.stepCount===i+1}
                                                                                  onClick={()=>{this.handleSelect('stepCount' , i+1);
                                                                                  }}
                                                                   />
                                                               )
                                                           })
                                                       }
                                                   </div>
                                                   <div className='my-4'>
                                                       <FormBoxTitle title={'محتوا'} />
                                                       <FormBoxInput placeholder={'عنوان اصلی'}/>
                                                   </div>
                                                   <div className='my-4'>
                                                       { this.generateStepSection(this.state.stepCount,'مرحله',true)}
                                                   </div>
                                                   <div className='my-4'>
                                                       <FormBoxFontSize box={'stepByStep'} />
                                                   </div>
                                               </div>
                                               <ScrollUp />
                                           </div>
                                       }

                                       {
                                           this.state.addSection.includes(4) &&
                                           <div className='section sectionFeatures pt-6' ref={this.sectionFeatures}>
                                               <div className='form-box mt-4'>
                                                   <FormBoxHead title={'Features#'} menuAndArrow={true} />
                                                   <div className='my-4 d-flex'>
                                                       <FormBoxLabel title='تعداد بخش ها' />
                                                       {
                                                           ['سه' , 'چهار' , 'شش'].map((el,i)=>{
                                                               return(
                                                                   <RectangleItem title={el} key={i+1}
                                                                                  selectItem={this.state.sectionCount===i+1}
                                                                                  onClick={()=>{this.handleSelect('sectionCount' , i+1);
                                                                                  }}
                                                                   />
                                                               )
                                                           })
                                                       }
                                                   </div>
                                                   <div className='my-4'>
                                                       <FormBoxTitle title={'محتوا'} />
                                                       <FormBoxInput placeholder={'عنوان اصلی'}/>
                                                   </div>
                                                   <div className='my-4'>
                                                       { this.generateStepSection(this.state.sectionCount,'بخش',false)}
                                                   </div>
                                                   <div className='my-4'>
                                                       <FormBoxFontSize box={'features'} />
                                                   </div>
                                               </div>
                                               <ScrollUp />
                                           </div>
                                       }

                                       {
                                           this.state.addSection.includes(5) &&
                                           <div className='section sectionPricing pt-6' ref={this.sectionPricing}>
                                               <div className='form-box mt-4'>
                                                   <FormBoxHead title={'Pricing#'} menuAndArrow={true} />
                                                   <div className='my-4'>
                                                       <div className='d-flex mb-2'>
                                                           <FormBoxLabel title=' مدل ' />
                                                           {
                                                               ['1' , '2'].map((el,i)=>{
                                                                   return(
                                                                       <RectangleItem title={toPersianDigits(el)} key={i+1}
                                                                                      selectItem={this.state.featureModelCount===i+1}
                                                                                      onClick={()=>{this.handleSelect('featureModelCount' , i+1);
                                                                                      }}
                                                                       />
                                                                   )
                                                               })
                                                           }
                                                       </div>
                                                       <div  className='d-flex mb-2'>
                                                           <FormBoxLabel title='تعداد بسته ها ' />
                                                           {
                                                               ['دو' , 'سه' , 'چهار'].map((el,i)=>{
                                                                   return(
                                                                       <RectangleItem title={el} key={i+1}
                                                                                      selectItem={this.state.featurePackageCount===i+1}
                                                                                      onClick={()=>{this.handleSelect('featurePackageCount' , i+1);
                                                                                      }}
                                                                       />
                                                                   )
                                                               })
                                                           }
                                                       </div>
                                                       <div  className='d-flex mb-2'>
                                                           <FormBoxLabel title=' بسته ویژه ' />
                                                           {
                                                               ['1' , '2' , '3'].map((el,i)=>{
                                                                   return(
                                                                       <RectangleItem title={toPersianDigits(el)} key={i+1}
                                                                                      selectItem={this.state.featureSpecialPackageCount===i+1}
                                                                                      onClick={()=>{
                                                                                          this.handleSelect('featureSpecialPackageCount' , i+1);
                                                                                      }}
                                                                       />
                                                                   )
                                                               })
                                                           }
                                                       </div>
                                                   </div>
                                                   <div className='my-4'>
                                                       <FormBoxTitle title={'محتوا'} />
                                                       <FormBoxInput placeholder={'عنوان اصلی'}/>
                                                   </div>
                                                   <div className='my-4'>
                                                       { this.generateInsidePackage(this.state.featurePackageCount,'بسته')}
                                                   </div>
                                                   <div className='my-4'>
                                                       <FormBoxFontSize box={'pricing'} />
                                                   </div>
                                               </div>
                                               <ScrollUp />
                                           </div>
                                       }

                                       {
                                           this.state.addSection.includes(6) &&
                                           <div className='section sectionTestimonials pt-6' ref={this.sectionTestimonials}>
                                               <div className='form-box mt-4'>
                                                   <FormBoxHead title={'Testimonials#'} menuAndArrow={true} />
                                                   <div className='my-4'>
                                                       <div className='d-flex mb-2'>
                                                           <FormBoxLabel title=' مدل ' />
                                                           {
                                                               ['1' , '2'].map((el,i)=>{
                                                                   return(
                                                                       <RectangleItem title={toPersianDigits(el)} key={i+1}
                                                                                      selectItem={this.state.testimonialsModelCount===i+1}
                                                                                      onClick={()=>{
                                                                                          this.handleSelect('testimonialsModelCount' , i+1);
                                                                                      }}
                                                                       />
                                                                   )
                                                               })
                                                           }
                                                       </div>
                                                   </div>
                                                   <div className='my-4'>
                                                       <FormBoxTitle title={'محتوا'} />
                                                       <FormBoxInput placeholder={'عنوان اصلی'}/>
                                                   </div>
                                                   <div className='my-4'>
                                                       <div className='d-flex align-items-center'>
                                                           <FormBoxTitle title={'نظرات'}/>
                                                           <FormBoxSubTitle count={8} />
                                                       </div>
                                                       <div>
                                                           <AddComment />
                                                           {this.generateComment(this.state.addComment)}
                                                           <div className={'adding-box'} >
                                                               <Adding title={'نظر'} onClick={()=>this.addingClick('addComment')}/>
                                                           </div>
                                                       </div>
                                                   </div>
                                                   <div className='my-4'>
                                                       <FormBoxFontSize box={'testimonials'} />
                                                   </div>
                                               </div>
                                               <ScrollUp />
                                           </div>
                                       }

                                       {
                                           this.state.addSection.includes(7) &&
                                           <div className='section sectionPeresLogo pt-6' ref={this.sectionPeresLogo}>
                                               <div className='form-box mt-4'>
                                                   <FormBoxHead title={'PeresLogo#'} menuAndArrow={true} />
                                                   <div className='my-4'>
                                                       <FormBoxTitle title={'محتوا'} />
                                                       <FormBoxInput placeholder={'عنوان اصلی'}/>
                                                   </div>
                                                   <div className='my-4'>
                                                       <div className='mb-3'>
                                                           <div className='d-flex align-items-center'>
                                                               <FormBoxTitle title={'لوگوها'}/>
                                                               <FormBoxSubTitle count={9}  />
                                                           </div>
                                                           <FormBoxSubTitle volume={true} />
                                                       </div>
                                                       <div className='mb-2'>
                                                           <AddLogo />
                                                           {this.generateLogo(this.state.addLogo)}
                                                       </div>
                                                       <div className={'adding-box'} >
                                                           <Adding title={'لوگو'} onClick={()=>this.addingClick('addLogo')} />
                                                       </div>
                                                   </div>
                                                   <div className='my-4'>
                                                       <FormBoxFontSize box={'peresLogo'} />
                                                   </div>
                                               </div>
                                               <ScrollUp />
                                           </div>
                                       }

                                       {
                                           this.state.addSection.includes(8) &&
                                           <div className='section sectionCTABox pt-6' ref={this.sectionCTABox}>
                                               <div className='form-box mt-4'>
                                                   <FormBoxHead title={'CTABox#'} menuAndArrow={true} />
                                                   <div className='my-4 d-flex'>
                                                       <FormBoxLabel title=' مدل ' />
                                                       {
                                                           ['1' , '2'].map((el,i)=>{
                                                               return(
                                                                   <RectangleItem title={toPersianDigits(el)} key={i+1}
                                                                                  selectItem={this.state.CTABoxModelCount===i+1}
                                                                                  onClick={()=>{
                                                                                      this.handleSelect('CTABoxModelCount' , i+1);
                                                                                  }}
                                                                   />
                                                               )
                                                           })
                                                       }
                                                   </div>
                                                   <div className='my-4'>
                                                       <FormBoxTitle title={'محتوا'} />
                                                       <FormBoxInput placeholder={'عنوان اصلی'}/>
                                                       <FormBoxInput placeholder={'زیر عنوان'}/>
                                                   </div>
                                                   <div className='my-4'>
                                                       <div className=' d-flex align-items-center'>
                                                           <FormBoxTitle title={'دکمه ها'}/>
                                                           <FormBoxSubTitle count={2}  />
                                                       </div>
                                                       <div>
                                                           <AddButton />
                                                           {this.generateButton(this.state.addButton)}
                                                       </div>
                                                       <div className={'adding-box'} >
                                                           <Adding title={'دکمه'} onClick={()=>this.addingClick('addButton')} />
                                                       </div>
                                                   </div>
                                                   <div className='my-4'>
                                                       <FormBoxFontSize box={'ctaBox'} />
                                                   </div>
                                               </div>
                                               <ScrollUp />
                                           </div>
                                       }

                                       {
                                           this.state.addSection.includes(9) &&
                                           <div className='section sectionLeadCaptured pt-6' ref={this.sectionLeadCaptured}>
                                               <div className='form-box mt-4'>
                                                   <FormBoxHead title={'LeadCaptured#'} menuAndArrow={true} />
                                                   <div className='my-4 d-flex'>
                                                       <FormBoxLabel title=' مدل ' />
                                                       {
                                                           ['1' , '2'].map((el,i)=>{
                                                               return(
                                                                   <RectangleItem title={toPersianDigits(el)} key={i+1}
                                                                                  selectItem={this.state.LeadCapturedModelCount===i+1}
                                                                                  onClick={()=>{
                                                                                      this.handleSelect('LeadCapturedModelCount' , i+1);
                                                                                  }}
                                                                   />
                                                               )
                                                           })
                                                       }
                                                   </div>
                                                   <div className='my-4'>
                                                       <FormBoxTitle title={'محتوا'} />
                                                       <FormBoxInput placeholder={'عنوان اصلی'}/>
                                                       <FormBoxTextarea placeholder={'توضیحات'}/>
                                                       <FormBoxInput placeholder={'عنوان دکمه'}/>
                                                   </div>
                                                   <div className='my-4'>
                                                       <div className=' d-flex align-items-center'>
                                                           <FormBoxTitle title={'فیلد ها'}/>
                                                           <FormBoxSubTitle count={3}  />
                                                       </div>
                                                       <div >
                                                           <AddField />
                                                           {this.generateField(this.state.addField)}
                                                       </div>
                                                       <div className={'adding-box'} >
                                                           <Adding title={'فیلد'} onClick={()=>this.addingClick('addField')} />
                                                       </div>
                                                   </div>
                                                   <div className='my-4'>
                                                       <FormBoxFontSize box={'leadCaptures'} />
                                                   </div>
                                               </div>
                                               <ScrollUp />
                                           </div>
                                       }

                                       {
                                           this.state.addSection.includes(10) &&
                                           <div className='section sectionMedia pt-6' ref={this.sectionMedia}>
                                               <div className='form-box mt-4'>
                                                   <FormBoxHead title={'Media#'} menuAndArrow={true} />
                                                   <div className='my-4 '>
                                                       <div className='d-flex'>
                                                           <FormBoxLabel title=' نوع ' />
                                                           {
                                                               ['گالری' , 'ویدئو'].map((el,i)=>{
                                                                   return(
                                                                       <RectangleItem title={toPersianDigits(el)} key={i+1}
                                                                                      selectItem={this.state.mediaType===i+1}
                                                                                      onClick={()=>{
                                                                                          this.handleSelect('mediaType' , i+1);
                                                                                      }}
                                                                       />
                                                                   )
                                                               })
                                                           }
                                                       </div>
                                                       <div className='my-2'>
                                                           {
                                                               this.state.mediaType===2 &&
                                                               <RectanglePosition
                                                               />
                                                           }
                                                       </div>
                                                       <div className='d-flex'>
                                                           <FormBoxLabel title=' نوع ' />
                                                           {
                                                               ['ندارد' , 'گالری'].map((el,i)=>{
                                                                   return(
                                                                       <RectangleItem title={toPersianDigits(el)} key={i+1}
                                                                                      selectItem={this.state.mediaType2===i+1}
                                                                                      onClick={()=>{
                                                                                          this.handleSelect('mediaType2' , i+1);
                                                                                      }}
                                                                       />
                                                                   )
                                                               })
                                                           }
                                                       </div>
                                                   </div>
                                                   <div className='my-4'>
                                                       <FormBoxTitle title={'محتوا'} />
                                                       <FormBoxInput placeholder={'عنوان اصلی'}/>
                                                       <FormBoxTextarea placeholder={'توضیحات'}/>
                                                   </div>
                                                   <div className='my-4 d-flex justify-content-between'>
                                                       <div className='d-flex flex-column'>
                                                           <div className='d-flex align-items-center'>
                                                               <FormBoxTitle title={' آپلود تصاویر گالری'}/>
                                                               <FormBoxSubTitle count={8}  />
                                                           </div>
                                                           <FormBoxSubTitle volume={true} />
                                                       </div>
                                                       <UploadBox  uploadLogo={true} />
                                                   </div>
                                                   <div className='my-4'>
                                                       <FormBoxTitle title={'درج ویدئو'}/>
                                                       <FormBoxInput placeholder={'لینک'}/>
                                                   </div>
                                                   <div className='my-4'>
                                                       <FormBoxFontSize box={'media'} />
                                                   </div>
                                               </div>
                                               <ScrollUp />
                                           </div>
                                       }

                                       {
                                           this.state.addSection.includes(11) &&
                                           <div className='section sectionFAQ pt-6' ref={this.sectionFAQ}>
                                               <div className='form-box mt-4'>
                                                   <FormBoxHead title={'FAQ#'} menuAndArrow={true} />
                                                   <div className='my-4 d-flex '>
                                                       <FormBoxLabel title=' مدل ' />
                                                       {
                                                           ['1' , '2'].map((el,i)=>{
                                                               return(
                                                                   <RectangleItem title={toPersianDigits(el)} key={i+1}
                                                                                  selectItem={this.state.FAQModelCount===i+1}
                                                                                  onClick={()=>{
                                                                                      this.handleSelect('FAQModelCount' , i+1);
                                                                                  }}
                                                                   />
                                                               )
                                                           })
                                                       }
                                                   </div>
                                                   <div className='my-4'>
                                                       <FormBoxTitle title={'محتوا'} />
                                                       <FormBoxInput placeholder={'عنوان اصلی'}/>
                                                   </div>
                                                   <div className='my-4'>
                                                       <div className='d-flex align-items-center' >
                                                           <FormBoxTitle title={'سوالات'} />
                                                           <FormBoxSubTitle count={5}/>
                                                       </div>
                                                       <div className='mb-2'>
                                                           <FormBoxSubTitle volume={true}/>
                                                       </div>
                                                       <div >
                                                           <AddQuestion />
                                                           {this.generateQuestion(this.state.addQuestion)}
                                                       </div>
                                                       <div className='adding-box'>
                                                           <Adding title={'سوال'} onClick={()=>this.addingClick('addQuestion')}/>
                                                       </div>
                                                   </div>
                                                   <div className='my-4'>
                                                       <FormBoxFontSize box={'faq'} />
                                                   </div>
                                               </div>
                                               <ScrollUp />
                                           </div>
                                       }

                                       {
                                           this.state.addSection.includes(12) &&
                                           <div className='section sectionTeam pt-6' ref={this.sectionTeam}>
                                               <div className='form-box mt-4'>
                                                   <FormBoxHead title={'Team#'} menuAndArrow={true} />
                                                   <div className='my-4'>
                                                       <FormBoxTitle title={'محتوا'} />
                                                       <FormBoxInput placeholder={'عنوان اصلی'}/>
                                                   </div>
                                                   <div className='my-4'>
                                                       <div className='d-flex align-items-center' >
                                                           <FormBoxTitle title={'اعضاء'} />
                                                           <FormBoxSubTitle count={8}/>
                                                       </div>
                                                       <div>
                                                           <AddMember />
                                                           {this.generateMember(this.state.addMember)}
                                                       </div>
                                                       <div className='adding-box'>
                                                           <Adding title={'عضو'} onClick={()=>this.addingClick('addMember')} />
                                                       </div>
                                                   </div>
                                                   <div className='my-4'>
                                                       <FormBoxFontSize box={'team'} />
                                                   </div>
                                               </div>
                                               <ScrollUp />
                                           </div>
                                       }

                                   </div>
                               )
                           })
                       }


                       {/* {
                           this.state.addSection.includes(1) &&
                           <div className='section sectionTitle ' ref={this.sectionTitle}>
                               <div className='form-box mt-4'>
                                   <FormBoxHead title={'Title#'} menuAndArrow={true}
                                                arrowDownClick={this.handleOrderSection()}
                                                arrowUpClick={this.handleOrderSection()}
                                   />
                                   <div className='my-4'>
                                       <FormBoxInput placeholder={'عنوان اصلی'} />
                                       <FormBoxInput placeholder={'زیر عنوان'} />
                                       <RectanglePosition  />
                                   </div>
                                   <div className='my-4'>
                                       <FormBoxFontSize box={'title'} />
                                   </div>
                               </div>
                               <ScrollUp />
                           </div>
                      }*/}

                       {/*{
                           this.state.addSection.includes(2) &&
                           <div className='section sectionText pt-6' ref={this.sectionText}>
                               <div className='form-box mt-4'>
                                   <FormBoxHead title={'Text#'} menuAndArrow={true} />
                                   <div className='my-4'>
                                       <FormBoxTitle title={'محتوا'} />
                                       <FormBoxInput placeholder={'عنوان اصلی'} />
                                       <FormBoxTextarea placeholder={'توضیحات'} />
                                       <RectanglePosition  />
                                   </div>
                                   <div className='my-4'>
                                       <VisualIdentity box={'text'} visual={'model'} />
                                   </div>
                                   <div className='my-4'>
                                       <AddButton />
                                   </div>
                                   <div className='my-4'>
                                       <FormBoxFontSize box={'text'} />
                                   </div>
                               </div>
                               <ScrollUp />
                           </div>
                       }*/}

                       {/*{
                            this.state.addSection.includes(3) &&
                            <div className='section sectionByStep pt-6' ref={this.sectionByStep}>
                                <div className='form-box mt-4'>
                                    <FormBoxHead title={'StepByStep#'} menuAndArrow={true} />
                                    <div className='my-4 d-flex'>
                                        <FormBoxLabel title='تعداد مرحله' />
                                        {
                                            ['سه' , 'چهار' , 'شش'].map((el,i)=>{
                                                return(
                                                    <RectangleItem title={el} key={i+1}
                                                                   selectItem={this.state.stepCount===i+1}
                                                                   onClick={()=>{this.handleSelect('stepCount' , i+1);
                                                                   }}
                                                    />
                                                )
                                            })
                                        }
                                    </div>
                                    <div className='my-4'>
                                        <FormBoxTitle title={'محتوا'} />
                                        <FormBoxInput placeholder={'عنوان اصلی'}/>
                                    </div>
                                    <div className='my-4'>
                                        { this.generateStepSection(this.state.stepCount,'مرحله',true)}
                                    </div>
                                    <div className='my-4'>
                                        <FormBoxFontSize box={'stepByStep'} />
                                    </div>
                                </div>
                                <ScrollUp />
                            </div>
                        }*/}

                       {/*{
                           this.state.addSection.includes(4) &&
                           <div className='section sectionFeatures pt-6' ref={this.sectionFeatures}>
                               <div className='form-box mt-4'>
                                   <FormBoxHead title={'Features#'} menuAndArrow={true} />
                                   <div className='my-4 d-flex'>
                                       <FormBoxLabel title='تعداد بخش ها' />
                                       {
                                           ['سه' , 'چهار' , 'شش'].map((el,i)=>{
                                               return(
                                                   <RectangleItem title={el} key={i+1}
                                                                  selectItem={this.state.sectionCount===i+1}
                                                                  onClick={()=>{this.handleSelect('sectionCount' , i+1);
                                                                  }}
                                                   />
                                               )
                                           })
                                       }
                                   </div>
                                   <div className='my-4'>
                                       <FormBoxTitle title={'محتوا'} />
                                       <FormBoxInput placeholder={'عنوان اصلی'}/>
                                   </div>
                                   <div className='my-4'>
                                       { this.generateStepSection(this.state.sectionCount,'بخش',false)}
                                   </div>
                                   <div className='my-4'>
                                       <FormBoxFontSize box={'features'} />
                                   </div>
                               </div>
                               <ScrollUp />
                           </div>
                       }*/}

                       {/*{
                            this.state.addSection.includes(5) &&
                            <div className='section sectionPricing pt-6' ref={this.sectionPricing}>
                                <div className='form-box mt-4'>
                                    <FormBoxHead title={'Pricing#'} menuAndArrow={true} />
                                    <div className='my-4'>
                                        <div className='d-flex mb-2'>
                                            <FormBoxLabel title=' مدل ' />
                                            {
                                                ['1' , '2'].map((el,i)=>{
                                                    return(
                                                        <RectangleItem title={toPersianDigits(el)} key={i+1}
                                                                       selectItem={this.state.featureModelCount===i+1}
                                                                       onClick={()=>{this.handleSelect('featureModelCount' , i+1);
                                                                       }}
                                                        />
                                                    )
                                                })
                                            }
                                        </div>
                                        <div  className='d-flex mb-2'>
                                            <FormBoxLabel title='تعداد بسته ها ' />
                                            {
                                                ['دو' , 'سه' , 'چهار'].map((el,i)=>{
                                                    return(
                                                        <RectangleItem title={el} key={i+1}
                                                                       selectItem={this.state.featurePackageCount===i+1}
                                                                       onClick={()=>{this.handleSelect('featurePackageCount' , i+1);
                                                                       }}
                                                        />
                                                    )
                                                })
                                            }
                                        </div>
                                        <div  className='d-flex mb-2'>
                                            <FormBoxLabel title=' بسته ویژه ' />
                                            {
                                                ['1' , '2' , '3'].map((el,i)=>{
                                                    return(
                                                        <RectangleItem title={toPersianDigits(el)} key={i+1}
                                                                       selectItem={this.state.featureSpecialPackageCount===i+1}
                                                                       onClick={()=>{
                                                                           this.handleSelect('featureSpecialPackageCount' , i+1);
                                                                       }}
                                                        />
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                    <div className='my-4'>
                                        <FormBoxTitle title={'محتوا'} />
                                        <FormBoxInput placeholder={'عنوان اصلی'}/>
                                    </div>
                                    <div className='my-4'>
                                        { this.generateInsidePackage(this.state.featurePackageCount,'بسته')}
                                    </div>
                                    <div className='my-4'>
                                        <FormBoxFontSize box={'pricing'} />
                                    </div>
                                </div>
                                <ScrollUp />
                            </div>
                        }*/}

                       {/*{
                            this.state.addSection.includes(6) &&
                            <div className='section sectionTestimonials pt-6' ref={this.sectionTestimonials}>
                                <div className='form-box mt-4'>
                                    <FormBoxHead title={'Testimonials#'} menuAndArrow={true} />
                                    <div className='my-4'>
                                        <div className='d-flex mb-2'>
                                            <FormBoxLabel title=' مدل ' />
                                            {
                                                ['1' , '2'].map((el,i)=>{
                                                    return(
                                                        <RectangleItem title={toPersianDigits(el)} key={i+1}
                                                                       selectItem={this.state.testimonialsModelCount===i+1}
                                                                       onClick={()=>{
                                                                           this.handleSelect('testimonialsModelCount' , i+1);
                                                                       }}
                                                        />
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                    <div className='my-4'>
                                        <FormBoxTitle title={'محتوا'} />
                                        <FormBoxInput placeholder={'عنوان اصلی'}/>
                                    </div>
                                    <div className='my-4'>
                                        <div className='d-flex align-items-center'>
                                            <FormBoxTitle title={'نظرات'}/>
                                            <FormBoxSubTitle count={8} />
                                        </div>
                                        <div>
                                            <AddComment />
                                            {this.generateComment(this.state.addComment)}
                                            <div className={'adding-box'} >
                                                <Adding title={'نظر'} onClick={()=>this.addingClick('addComment')}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='my-4'>
                                        <FormBoxFontSize box={'testimonials'} />
                                    </div>
                                </div>
                                <ScrollUp />
                            </div>
                        }*/}

                       {/*{
                           this.state.addSection.includes(7) &&
                           <div className='section sectionPeresLogo pt-6' ref={this.sectionPeresLogo}>
                               <div className='form-box mt-4'>
                                   <FormBoxHead title={'PeresLogo#'} menuAndArrow={true} />
                                   <div className='my-4'>
                                       <FormBoxTitle title={'محتوا'} />
                                       <FormBoxInput placeholder={'عنوان اصلی'}/>
                                   </div>
                                   <div className='my-4'>
                                       <div className='mb-3'>
                                           <div className='d-flex align-items-center'>
                                               <FormBoxTitle title={'لوگوها'}/>
                                               <FormBoxSubTitle count={9}  />
                                           </div>
                                           <FormBoxSubTitle volume={true} />
                                       </div>
                                       <div className='mb-2'>
                                           <AddLogo />
                                           {this.generateLogo(this.state.addLogo)}
                                       </div>
                                       <div className={'adding-box'} >
                                           <Adding title={'لوگو'} onClick={()=>this.addingClick('addLogo')} />
                                       </div>
                                   </div>
                                   <div className='my-4'>
                                       <FormBoxFontSize box={'peresLogo'} />
                                   </div>
                               </div>
                               <ScrollUp />
                           </div>
                       }*/}

                       {/*{
                           this.state.addSection.includes(8) &&
                           <div className='section sectionCTABox pt-6' ref={this.sectionCTABox}>
                               <div className='form-box mt-4'>
                                   <FormBoxHead title={'CTABox#'} menuAndArrow={true} />
                                   <div className='my-4 d-flex'>
                                       <FormBoxLabel title=' مدل ' />
                                       {
                                           ['1' , '2'].map((el,i)=>{
                                               return(
                                                   <RectangleItem title={toPersianDigits(el)} key={i+1}
                                                                  selectItem={this.state.CTABoxModelCount===i+1}
                                                                  onClick={()=>{
                                                                      this.handleSelect('CTABoxModelCount' , i+1);
                                                                  }}
                                                   />
                                               )
                                           })
                                       }
                                   </div>
                                   <div className='my-4'>
                                       <FormBoxTitle title={'محتوا'} />
                                       <FormBoxInput placeholder={'عنوان اصلی'}/>
                                       <FormBoxInput placeholder={'زیر عنوان'}/>
                                   </div>
                                   <div className='my-4'>
                                       <div className=' d-flex align-items-center'>
                                           <FormBoxTitle title={'دکمه ها'}/>
                                           <FormBoxSubTitle count={2}  />
                                       </div>
                                       <div>
                                           <AddButton />
                                           {this.generateButton(this.state.addButton)}
                                       </div>
                                       <div className={'adding-box'} >
                                           <Adding title={'دکمه'} onClick={()=>this.addingClick('addButton')} />
                                       </div>
                                   </div>
                                   <div className='my-4'>
                                       <FormBoxFontSize box={'ctaBox'} />
                                   </div>
                               </div>
                               <ScrollUp />
                           </div>
                       }*/}

                       {/*{
                           this.state.addSection.includes(9) &&
                           <div className='section sectionLeadCaptured pt-6' ref={this.sectionLeadCaptured}>
                               <div className='form-box mt-4'>
                                   <FormBoxHead title={'LeadCaptured#'} menuAndArrow={true} />
                                   <div className='my-4 d-flex'>
                                       <FormBoxLabel title=' مدل ' />
                                       {
                                           ['1' , '2'].map((el,i)=>{
                                               return(
                                                   <RectangleItem title={toPersianDigits(el)} key={i+1}
                                                                  selectItem={this.state.LeadCapturedModelCount===i+1}
                                                                  onClick={()=>{
                                                                      this.handleSelect('LeadCapturedModelCount' , i+1);
                                                                  }}
                                                   />
                                               )
                                           })
                                       }
                                   </div>
                                   <div className='my-4'>
                                       <FormBoxTitle title={'محتوا'} />
                                       <FormBoxInput placeholder={'عنوان اصلی'}/>
                                       <FormBoxTextarea placeholder={'توضیحات'}/>
                                       <FormBoxInput placeholder={'عنوان دکمه'}/>
                                   </div>
                                   <div className='my-4'>
                                       <div className=' d-flex align-items-center'>
                                           <FormBoxTitle title={'فیلد ها'}/>
                                           <FormBoxSubTitle count={3}  />
                                       </div>
                                       <div >
                                           <AddField />
                                           {this.generateField(this.state.addField)}
                                       </div>
                                       <div className={'adding-box'} >
                                           <Adding title={'فیلد'} onClick={()=>this.addingClick('addField')} />
                                       </div>
                                   </div>
                                   <div className='my-4'>
                                       <FormBoxFontSize box={'leadCaptures'} />
                                   </div>
                               </div>
                               <ScrollUp />
                           </div>
                       }*/}

                       {/*{
                           this.state.addSection.includes(10) &&
                           <div className='section sectionMedia pt-6' ref={this.sectionMedia}>
                               <div className='form-box mt-4'>
                                   <FormBoxHead title={'Media#'} menuAndArrow={true} />
                                   <div className='my-4 '>
                                       <div className='d-flex'>
                                           <FormBoxLabel title=' نوع ' />
                                           {
                                               ['گالری' , 'ویدئو'].map((el,i)=>{
                                                   return(
                                                       <RectangleItem title={toPersianDigits(el)} key={i+1}
                                                                      selectItem={this.state.mediaType===i+1}
                                                                      onClick={()=>{
                                                                          this.handleSelect('mediaType' , i+1);
                                                                      }}
                                                       />
                                                   )
                                               })
                                           }
                                       </div>
                                       <div className='my-2'>
                                           {
                                               this.state.mediaType===2 &&
                                               <RectanglePosition
                                               />
                                           }
                                       </div>
                                       <div className='d-flex'>
                                           <FormBoxLabel title=' نوع ' />
                                           {
                                               ['ندارد' , 'گالری'].map((el,i)=>{
                                                   return(
                                                       <RectangleItem title={toPersianDigits(el)} key={i+1}
                                                                      selectItem={this.state.mediaType2===i+1}
                                                                      onClick={()=>{
                                                                          this.handleSelect('mediaType2' , i+1);
                                                                      }}
                                                       />
                                                   )
                                               })
                                           }
                                       </div>
                                   </div>
                                   <div className='my-4'>
                                       <FormBoxTitle title={'محتوا'} />
                                       <FormBoxInput placeholder={'عنوان اصلی'}/>
                                       <FormBoxTextarea placeholder={'توضیحات'}/>
                                   </div>
                                   <div className='my-4 d-flex justify-content-between'>
                                       <div className='d-flex flex-column'>
                                           <div className='d-flex align-items-center'>
                                               <FormBoxTitle title={' آپلود تصاویر گالری'}/>
                                               <FormBoxSubTitle count={8}  />
                                           </div>
                                           <FormBoxSubTitle volume={true} />
                                       </div>
                                       <UploadBox  uploadLogo={true} />
                                   </div>
                                   <div className='my-4'>
                                       <FormBoxTitle title={'درج ویدئو'}/>
                                       <FormBoxInput placeholder={'لینک'}/>
                                   </div>
                                   <div className='my-4'>
                                       <FormBoxFontSize box={'media'} />
                                   </div>
                               </div>
                               <ScrollUp />
                           </div>
                       }*/}

                       {/*{
                           this.state.addSection.includes(11) &&
                           <div className='section sectionFAQ pt-6' ref={this.sectionFAQ}>
                               <div className='form-box mt-4'>
                                   <FormBoxHead title={'FAQ#'} menuAndArrow={true} />
                                   <div className='my-4 d-flex '>
                                       <FormBoxLabel title=' مدل ' />
                                       {
                                           ['1' , '2'].map((el,i)=>{
                                               return(
                                                   <RectangleItem title={toPersianDigits(el)} key={i+1}
                                                                  selectItem={this.state.FAQModelCount===i+1}
                                                                  onClick={()=>{
                                                                      this.handleSelect('FAQModelCount' , i+1);
                                                                  }}
                                                   />
                                               )
                                           })
                                       }
                                   </div>
                                   <div className='my-4'>
                                       <FormBoxTitle title={'محتوا'} />
                                       <FormBoxInput placeholder={'عنوان اصلی'}/>
                                   </div>
                                   <div className='my-4'>
                                       <div className='d-flex align-items-center' >
                                           <FormBoxTitle title={'سوالات'} />
                                           <FormBoxSubTitle count={5}/>
                                       </div>
                                       <div className='mb-2'>
                                           <FormBoxSubTitle volume={true}/>
                                       </div>
                                       <div >
                                           <AddQuestion />
                                           {this.generateQuestion(this.state.addQuestion)}
                                       </div>
                                       <div className='adding-box'>
                                           <Adding title={'سوال'} onClick={()=>this.addingClick('addQuestion')}/>
                                       </div>
                                   </div>
                                   <div className='my-4'>
                                       <FormBoxFontSize box={'faq'} />
                                   </div>
                               </div>
                               <ScrollUp />
                           </div>
                       }*/}

                       {/*{
                            this.state.addSection.includes(12) &&
                            <div className='section sectionTeam pt-6' ref={this.sectionTeam}>
                                <div className='form-box mt-4'>
                                    <FormBoxHead title={'Team#'} menuAndArrow={true} />
                                    <div className='my-4'>
                                        <FormBoxTitle title={'محتوا'} />
                                        <FormBoxInput placeholder={'عنوان اصلی'}/>
                                    </div>
                                    <div className='my-4'>
                                        <div className='d-flex align-items-center' >
                                            <FormBoxTitle title={'اعضاء'} />
                                            <FormBoxSubTitle count={8}/>
                                        </div>
                                        <div>
                                            <AddMember />
                                            {this.generateMember(this.state.addMember)}
                                        </div>
                                        <div className='adding-box'>
                                            <Adding title={'عضو'} onClick={()=>this.addingClick('addMember')} />
                                        </div>
                                    </div>
                                    <div className='my-4'>
                                        <FormBoxFontSize box={'team'} />
                                    </div>
                                </div>
                                <ScrollUp />
                            </div>
                        }*/}


                   </Col>
                   <Col md={6}>
                       <ViewDemo handleSelectViewDemo={this.handleSelect} selectViewDemo={this.state.selectViewDemo}/>
                   </Col>
               </Row>
           </Container>
                    </Col>
                </Row>
            </Container>
        )
    }
}