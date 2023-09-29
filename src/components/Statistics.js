export const Statistics = props => {
    console.log(props);
    return(
        <section class="statistics">
  <h2 class="title">Upload stats</h2>

  <ul class="stat-list">
    {props.data.map((item)=>{
        return ( <li>
          <span>{item.label}</span>
          <span>{item.percentage}%</span>
        </li>)
    })}
  </ul>
</section>
    )
}