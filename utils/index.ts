// 判断终端
export const _isMobile = () => {
  const userAgentInfo = navigator.userAgent.toLowerCase()
  const Agents = ['android', 'iphone', 'symbianos', 'windows phone', 'ipad', 'ipod']
  // const ly = document.referrer; // 返回导航到当前网页的超链接所在网页的URL // &&(ly==''||ly==null)

  for (let v = 0; v < Agents.length; v++) {
    if (userAgentInfo.includes(Agents[v])) {
      return true
    }
  }
  return false
}
