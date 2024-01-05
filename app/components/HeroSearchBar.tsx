'use client'
import Select, { ThemeConfig } from 'react-select'
import makeAnimated from 'react-select/animated'
import {useState} from 'react'

interface PostOptionsType {
    value : string
    label:string
}

function HeroSearchBar() {
    const [postOption,setPostOption] = useState("JOB")
    const [selectedCategories,setSelectedCategories] = useState<string[]>([])


    const postOptions : PostOptionsType[] = [
        {value:'JOB',label:'Job'},
        {value:'TALENT',label:'Talent'},
    ]

    const postStyles = {
        control: (styles) => ({
            ...styles,
            paddingTop: '4px',
            paddingBottom: '4px',
            // borderColor:"#00000000",
            // borderRight:"solid 1px #00000055",
            // borderRadius:"0px",
            // paddingRight:"10px",
        }),
        singleValue:(styles)=>({
            ...styles,
            color:"#0146B1dd",
            fontWeight:600,
            fontSize:"20px",
            paddingLeft:"6px",
        })
    }

    const categoryOptions: PostOptionsType[] = [
        { value: 'WEB_DEVELOPMENT', label: 'Web Development' },
        { value: 'MOBILE_DEVELOPMENT', label: 'Mobile Development' },
        { value: 'UI_UX_DESIGN', label: 'UI/UX Design' },
        { value: 'PROJECT_MANAGEMENT', label: 'Project Management' },
        { value: 'VIDEO_EDITING', label: 'Video Editing' },
        { value: 'ML_MODEL', label: 'AI' },
        { value: 'MARKETING', label: 'Marketing' },
    ]

    const customTheme = (theme:any)=>{
        return {
            ...theme,
            colors: {
                ...theme.colors,
                primary25: '#E4EEFC',
                primary: '#0146B1',
            },
        }
    }
    const categoryStyles = {
        control: (styles) => ({
            ...styles,
            paddingTop: "4px",
            paddingBottom: "4px",


        }),
        multiValue: (styles) => {
            return {
                ...styles,
                backgroundColor: '#E4EEFC',
                borderRadius: '20px',
                paddingLeft: "16px",
                // paddingTop: "4px",
                paddingRight:"6px",
                // paddingBottom: "4px",
                padding:"2px",
                color: '#0146B1',
                fontWeight: 600,
                flex: '0 0 auto',
            }
        },
        multiValueLabel: (styles) => {
            return {
                ...styles,
                color: '#0146B1',
            }
        },
        valueContainer: (styles) => ({
            ...styles,
            overflowX: 'scroll',
            paddingLeft:"12px",
            flexWrap: 'unset',
            "::-webkit-scrollbar":{
                    display:"none"
                }
        }),
        multiValueRemove: (styles) => {
            return {
                ...styles,
                color: '#0146B1',
                cursor: 'pointer',
                ':hover': {
                    color: '#0146B199',
                },
                
            }
        },
    }
    
  return (
      <div className="w-full lg:w-[80%] absolute bg-white shadow-md border-neutral-200 border-[1px] rounded-xl p-4 -bottom-[40px] lg:ml-[10%] py-4 flex flex-row justify-between ">
          <div className="flex flex-row w-full">
          {/* Talent Or Job */}
          <div className="w-[20%] mx-4">
              <Select
                  onChange={(e) => setPostOption(e.value)}
                  options={postOptions}
                  theme={customTheme}
                  styles={postStyles}
                  // isSearchable
                  autoFocus
                  placeholder="Type"
                  className="w-full"
                  defaultValue={'TALENT'}

              />
          </div>

          {/* Categories */}
            <div className="w-[50%] mx-4">
                <Select
                    placeholder="Select Categories"
                    onChange={(e) => {
                        setSelectedCategories((prev) =>
                            e.map((option) => {
                                return option.value
                            })
                        )
                    }}
                    noOptionsMessage={() => 'No matches found .'}
                    theme={customTheme}
                    isSearchable
                    isMulti
                    className="w-full hide-scrollbar"
                    options={categoryOptions}
                    styles={categoryStyles}
                />
            </div>

          </div>

          {/* Search BUTTON */}
          <button className="text-white px-6 py-3 rounded-xl bg-[#7561EF]  ">
                  Search
          </button>
      </div>
  )
}

export default HeroSearchBar