/* tracking-[2/5] bg-teal-200:55 c-#e67e22 */

    export default function(){
      const day = 10
    
      const classnames = (p:any) => {
        return p
      }
    
      return (
        <>
          <div className={day < 20 ? 'c-_wn_e67e22' : "c-_lfl__wn_157_lfr__sl_60"} >剩余 {day} 天</div>
    
      <div className={classnames({
        'c-_wn_e67e22':true, 
          "tracking-_lfl_2_sl_5_lfr_":false
        })
      }
      />
    
      <div className='tracking-_lfl_2_sl_5_lfr_ bg-teal-200_cl_55'> tracking-[2/5] </div>
      </>
      )
    }
    