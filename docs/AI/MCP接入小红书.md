# MCP接入小红书

## 小红书数据获取
> 依赖 NodeJS puppeteer 

```javascript
//小红书接口签名 使用puppeteer调用window._webmsxyw实现接口签名
async function getSign(path, body) {
    return await rednote_page.evaluate((p, b) => {
        return window._webmsxyw(p, b);
    }, path, body);
}

//获取首页小红书笔记接口
async function getList(keyword) {
    const cookie = "" //登录cookie
    const body = { 
        "keyword": keyword, 
        "page": 1, 
        "page_size": 20, 
        "search_id": "xxxxxxxxxx", 
        "sort": "general", 
        "note_type": 0, 
        "ext_flags": [], 
        "geo": "", 
        "image_formats": ["jpg", "webp", "avif"] 
    };
    const sign = await getSign('/api/sns/web/v1/search/notes', body);

    const res = await fetch("https://edith.xiaohongshu.com/api/sns/web/v1/search/notes", {
        "headers": {
            "accept": "application/json, text/plain, */*",
            "accept-language": "zh-CN,zh;q=0.9",
            "cache-control": "no-cache",
            "content-type": "application/json;charset=UTF-8",
            "pragma": "no-cache",
            "priority": "u=1, i",
            "sec-ch-ua": "\"Google Chrome\";v=\"135\", \"Not-A.Brand\";v=\"8\", \"Chromium\";v=\"135\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"macOS\"",
            "x-s": sign['X-s'],     //接口签名
            "x-t": sign['X-t'],     //签名方法 window._webmsxyw 会返回一个时间戳
            "cookie": cookie,
            "Referer": "https://www.xiaohongshu.com/",
            "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        "body": JSON.stringify(body),
        "method": "POST"
    });
    return await res.json();
}
```

## MCP服务搭建
> 依赖 mcp-framework  
> 协议 sse
```javascript
import { MCPTool } from "mcp-framework";
import { z } from "zod";

interface RednoteInput {
    keyword: string;
}

class RednoteTool extends MCPTool<RednoteInput> {
    name = "redNote";
    description = "根据关键词搜索小红书笔记";

    schema = {
        keyword: {
            type: z.string(),
            description: "要搜索的关键词",
        },
    };

    //可以调用之前的获取数据接口
    async execute(input: RednoteInput) {
        return `Processed: ${input.keyword}`;
    }
}

export default RednoteTool;
```