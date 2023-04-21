import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [data, setData] = useState(0);
  const [data1, setData1] = useState(0);
  const [data2, setData2] = useState(0);
  const [data3, setData3] = useState(0);
  const [data4, setData4] = useState(0);
  const [data5, setData5] = useState(0);
  const [data6, setData6] = useState(0);

  const handleData = (e) => {
    setData(e.target.value);
  };

  const handleData1 = (e) => {
    setData1(e.target.value);
  };

  const handleData2 = (e) => {
    setData2(e.target.value);
  };

  const handleData3 = (e) => {
    setData3(e.target.value);
  };

  const handleData4 = (e) => {
    setData4(e.target.value);
  };

  const handleData5 = (e) => {
    setData5(e.target.value);
  };

  const handleData6 = (e) => {
    setData6(e.target.value);
  };
  return (
    <>
      <title></title>
      {/*[if !mso]><!*/}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      {/*<![endif]*/}
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <style
        type="text/css"
        dangerouslySetInnerHTML={{
          __html:
            "\n    #outlook a {\n      padding: 0;\n    }\n\n    body {\n      margin: 0;\n      padding: 0;\n      -webkit-text-size-adjust: 100%;\n      -ms-text-size-adjust: 100%;\n    }\n\n    table,\n    td {\n      border-collapse: collapse;\n      mso-table-lspace: 0pt;\n      mso-table-rspace: 0pt;\n    }\n\n    img {\n      border: 0;\n      height: auto;\n      line-height: 100%;\n      outline: none;\n      text-decoration: none;\n      -ms-interpolation-mode: bicubic;\n    }\n\n    p {\n      display: block;\n      margin: 13px 0;\n    }\n  ",
        }}
      />
      {/*[if mso]>
  <noscript>
  <xml>
  <o:OfficeDocumentSettings>
    <o:AllowPNG/>
    <o:PixelsPerInch>96</o:PixelsPerInch>
  </o:OfficeDocumentSettings>
  </xml>
  </noscript>
  <![endif]*/}
      {/*[if lte mso 11]>
  <style type="text/css">
    .mj-outlook-group-fix { width:100% !important; }
  </style>
  <![endif]*/}
      {/*[if !mso]><!*/}
      <link
        href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700"
        rel="stylesheet"
        type="text/css"
      />
      <style
        type="text/css"
        dangerouslySetInnerHTML={{
          __html:
            "\n    @import url(https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700);\n  ",
        }}
      />
      {/*<![endif]*/}
      <style
        type="text/css"
        dangerouslySetInnerHTML={{
          __html:
            "\n    @media only screen and (min-width:480px) {\n      .mj-column-per-100 {\n        width: 100% !important;\n        max-width: 100%;\n      }\n\n      .mj-column-px-300 {\n        width: 300px !important;\n        max-width: 300px;\n      }\n\n      .mj-column-per-50 {\n        width: 50% !important;\n        max-width: 50%;\n      }\n    }\n  ",
        }}
      />
      <style
        media="screen and (min-width:480px)"
        dangerouslySetInnerHTML={{
          __html:
            "\n    .moz-text-html .mj-column-per-100 {\n      width: 100% !important;\n      max-width: 100%;\n    }\n\n    .moz-text-html .mj-column-px-300 {\n      width: 300px !important;\n      max-width: 300px;\n    }\n\n    .moz-text-html .mj-column-per-50 {\n      width: 50% !important;\n      max-width: 50%;\n    }\n  ",
        }}
      />
      <style
        type="text/css"
        dangerouslySetInnerHTML={{
          __html:
            "\n    @media only screen and (max-width:480px) {\n      table.mj-full-width-mobile {\n        width: 100% !important;\n      }\n\n      td.mj-full-width-mobile {\n        width: auto !important;\n      }\n    }\n  ",
        }}
      />
      <div style={{}}>
        {/*[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]*/}
        <div
          style={{
            background: "",
            backgroundColor: "",
            margin: "0px auto",
            maxWidth: 600,
          }}
        >
          <table
            align="center"
            border={0}
            cellPadding={0}
            cellSpacing={0}
            role="presentation"
            style={{ background: "", backgroundColor: "", width: "100%" }}
          >
            <tbody>
              <tr>
                <td
                  style={{
                    direction: "ltr",
                    fontSize: 0,
                    padding: 0,
                    textAlign: "center",
                  }}
                >
                  {/*[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]*/}
                  <div
                    className="mj-column-per-100 mj-outlook-group-fix"
                    style={{
                      fontSize: 0,
                      textAlign: "left",
                      direction: "ltr",
                      display: "inline-block",
                      verticalAlign: "top",
                      width: "100%",
                    }}
                  >
                    <table
                      border={0}
                      cellPadding={0}
                      cellSpacing={0}
                      role="presentation"
                      style={{ verticalAlign: "top" }}
                      width="100%"
                    >
                      <tbody>
                        <tr>
                          <td
                            align="left"
                            style={{
                              fontSize: 0,
                              padding: "24px 0 0 16px",
                              wordBreak: "break-word",
                            }}
                          >
                            <table
                              border={0}
                              cellPadding={0}
                              cellSpacing={0}
                              role="presentation"
                              style={{
                                borderCollapse: "collapse",
                                borderSpacing: 0,
                              }}
                            >
                              <tbody>
                                <tr>
                                  <td style={{ width: 100 }}>
                                    <img
                                      height={100}
                                      src="https://i.ibb.co/J5FG2my/Rectangle-1.png"
                                      style={{
                                        border: 0,
                                        display: "block",
                                        outline: "none",
                                        textDecoration: "none",
                                        height: 100,
                                        width: "100%",
                                        fontSize: 13,
                                      }}
                                      width={100}
                                    />
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                        <tr>
                          <td
                            align="left"
                            style={{
                              fontSize: 0,
                              padding: "24px 0 0 16px",
                              wordBreak: "break-word",
                            }}
                          >
                            <div
                              style={{
                                fontFamily:
                                  "Ubuntu, Helvetica, Arial, sans-serif",
                                fontSize: 16,
                                fontWeight: 700,
                                lineHeight: 1,
                                textAlign: "left",
                                color: "#334155",
                              }}
                            >
                              YOUR WEEKLY SUMMARY
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td
                            align="left"
                            style={{
                              fontSize: 0,
                              padding: "8px 0 0 16px",
                              wordBreak: "break-word",
                            }}
                          >
                            <div
                              style={{
                                fontFamily:
                                  "Ubuntu, Helvetica, Arial, sans-serif",
                                fontSize: 14,
                                lineHeight: 1,
                                textAlign: "left",
                                color: "#64748B",
                              }}
                            >
                              2 August, 2022- 9 August, 2022
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              fontSize: 0,
                              padding: "4px 0 0 0",
                              wordBreak: "break-word",
                            }}
                          >
                            {/*[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]*/}
                            <div style={{ margin: "0px auto", maxWidth: 600 }}>
                              <table
                                align="center"
                                border={0}
                                cellPadding={0}
                                cellSpacing={0}
                                role="presentation"
                                style={{ width: "100%" }}
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      style={{
                                        direction: "ltr",
                                        fontSize: 0,
                                        padding: "4px 0 0 0",
                                        textAlign: "center",
                                      }}
                                    >
                                      {/*[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:300px;" ><![endif]*/}
                                      <div
                                        className="mj-column-px-300 mj-outlook-group-fix"
                                        style={{
                                          fontSize: 0,
                                          textAlign: "left",
                                          direction: "ltr",
                                          display: "inline-block",
                                          verticalAlign: "top",
                                          width: "100%",
                                        }}
                                      >
                                        <table
                                          border={0}
                                          cellPadding={0}
                                          cellSpacing={0}
                                          role="presentation"
                                          style={{ verticalAlign: "top" }}
                                          width="100%"
                                        >
                                          <tbody>
                                            <tr>
                                              <td
                                                align="left"
                                                style={{
                                                  fontSize: 0,
                                                  padding: "28px 0 0 16px",
                                                  wordBreak: "break-word",
                                                }}
                                              >
                                                <div
                                                  style={{
                                                    fontFamily:
                                                      "Ubuntu, Helvetica, Arial, sans-serif",
                                                    fontSize: 12,
                                                    lineHeight: 1,
                                                    textAlign: "left",
                                                    color: "#334155",
                                                  }}
                                                >
                                                  PROCUREMENT SPENT
                                                </div>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td
                                                align="left"
                                                style={{
                                                  fontSize: 0,
                                                  padding: "8px 0 0 16px",
                                                  wordBreak: "break-word",
                                                }}
                                              >
                                                <div
                                                  style={{
                                                    fontFamily:
                                                      "Ubuntu, Helvetica, Arial, sans-serif",
                                                    fontSize: 24,
                                                    fontWeight: 700,
                                                    lineHeight: 1,
                                                    textAlign: "left",
                                                    color: "#000",
                                                  }}
                                                >
                                                  ₹ {data}
                                                </div>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </div>
                                      {/*[if mso | IE]></td><td class="" style="vertical-align:top;width:300px;" ><![endif]*/}
                                      <div
                                        className="mj-column-px-300 mj-outlook-group-fix"
                                        style={{
                                          fontSize: 0,
                                          textAlign: "left",
                                          direction: "ltr",
                                          display: "inline-block",
                                          verticalAlign: "top",
                                          width: "100%",
                                        }}
                                      >
                                        <table
                                          border={0}
                                          cellPadding={0}
                                          cellSpacing={0}
                                          role="presentation"
                                          style={{ verticalAlign: "top" }}
                                          width="100%"
                                        >
                                          <tbody>
                                            <tr>
                                              <td
                                                align="left"
                                                style={{
                                                  fontSize: 0,
                                                  padding: "28px 16px 0 16px",
                                                  wordBreak: "break-word",
                                                }}
                                              >
                                                <div
                                                  style={{
                                                    fontFamily:
                                                      "Ubuntu, Helvetica, Arial, sans-serif",
                                                    fontSize: 12,
                                                    lineHeight: 1,
                                                    textAlign: "left",
                                                    color: "#334155",
                                                  }}
                                                >
                                                  TOTAL SAVINGS
                                                </div>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td
                                                vertical-align="middle"
                                                style={{
                                                  fontSize: 0,
                                                  padding: "0px 8px 0 8px",
                                                  wordBreak: "break-word",
                                                }}
                                              >
                                                <div
                                                  className="mj-column-per-100 mj-outlook-group-fix"
                                                  style={{
                                                    fontSize: 0,
                                                    lineHeight: 0,
                                                    textAlign: "left",
                                                    display: "inline-block",
                                                    width: "100%",
                                                    direction: "ltr",
                                                    verticalAlign: "middle",
                                                  }}
                                                >
                                                  {/*[if mso | IE]><table border="0" cellpadding="0" cellspacing="0" role="presentation" ><tr><td style="vertical-align:top;width:284px;" ><![endif]*/}
                                                  <div
                                                    className="mj-column-per-100 mj-outlook-group-fix"
                                                    style={{
                                                      fontSize: 0,
                                                      textAlign: "left",
                                                      direction: "ltr",
                                                      display: "inline-block",
                                                      verticalAlign: "top",
                                                      width: "100%",
                                                    }}
                                                  >
                                                    <table
                                                      border={0}
                                                      cellPadding={0}
                                                      cellSpacing={0}
                                                      role="presentation"
                                                      style={{
                                                        verticalAlign: "top",
                                                      }}
                                                      width="100%"
                                                    >
                                                      <tbody>
                                                        <tr>
                                                          <td
                                                            align="left"
                                                            style={{
                                                              fontSize: 0,
                                                              padding:
                                                                "8px 0px 0 8px",
                                                              wordBreak:
                                                                "break-word",
                                                            }}
                                                          >
                                                            <div
                                                              style={{
                                                                fontFamily:
                                                                  "Ubuntu, Helvetica, Arial, sans-serif",
                                                                fontSize: 24,
                                                                fontWeight: 700,
                                                                lineHeight: 1,
                                                                textAlign:
                                                                  "left",
                                                                color: "#000",
                                                              }}
                                                            >
                                                              <span>
                                                                {" "}
                                                                ₹{data1}
                                                              </span>
                                                              <span
                                                                style={{
                                                                  fontSize: 18,
                                                                  fontWeight: 500,
                                                                  color:
                                                                    "#059669",
                                                                }}
                                                              >
                                                                {" "}
                                                                ({data2 + "%"})
                                                              </span>
                                                            </div>
                                                          </td>
                                                        </tr>
                                                      </tbody>
                                                    </table>
                                                  </div>
                                                  {/*[if mso | IE]></td></tr></table><![endif]*/}
                                                </div>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </div>
                                      {/*[if mso | IE]></td></tr></table><![endif]*/}
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            {/*[if mso | IE]></td></tr></table><![endif]*/}
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              fontSize: 0,
                              padding: "0px 0 0 0",
                              wordBreak: "break-word",
                            }}
                          >
                            {/*[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]*/}
                            <div style={{ margin: "0px auto", maxWidth: 600 }}>
                              <table
                                align="center"
                                border={0}
                                cellPadding={0}
                                cellSpacing={0}
                                role="presentation"
                                style={{ width: "100%" }}
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      style={{
                                        direction: "ltr",
                                        fontSize: 0,
                                        padding: "0px 0 0 0",
                                        textAlign: "center",
                                      }}
                                    >
                                      {/*[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:300px;" ><![endif]*/}
                                      <div
                                        className="mj-column-px-300 mj-outlook-group-fix"
                                        style={{
                                          fontSize: 0,
                                          textAlign: "left",
                                          direction: "ltr",
                                          display: "inline-block",
                                          verticalAlign: "top",
                                          width: "100%",
                                        }}
                                      >
                                        <table
                                          border={0}
                                          cellPadding={0}
                                          cellSpacing={0}
                                          role="presentation"
                                          style={{ verticalAlign: "top" }}
                                          width="100%"
                                        >
                                          <tbody>
                                            <tr>
                                              <td
                                                align="left"
                                                style={{
                                                  fontSize: 0,
                                                  padding: "28px 0 0 16px",
                                                  wordBreak: "break-word",
                                                }}
                                              >
                                                <div
                                                  style={{
                                                    fontFamily:
                                                      "Ubuntu, Helvetica, Arial, sans-serif",
                                                    fontSize: 12,
                                                    lineHeight: 1,
                                                    textAlign: "left",
                                                    color: "#334155",
                                                  }}
                                                >
                                                  EVENTS RUN
                                                </div>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td
                                                align="left"
                                                style={{
                                                  fontSize: 0,
                                                  padding: "8px 0 0 16px",
                                                  wordBreak: "break-word",
                                                }}
                                              >
                                                <div
                                                  style={{
                                                    fontFamily:
                                                      "Ubuntu, Helvetica, Arial, sans-serif",
                                                    fontSize: 24,
                                                    fontWeight: 700,
                                                    lineHeight: 1,
                                                    textAlign: "left",
                                                    color: "#000000",
                                                  }}
                                                >
                                                  {data3}
                                                </div>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </div>
                                      {/*[if mso | IE]></td><td class="" style="vertical-align:top;width:300px;" ><![endif]*/}
                                      <div
                                        className="mj-column-px-300 mj-outlook-group-fix"
                                        style={{
                                          fontSize: 0,
                                          textAlign: "left",
                                          direction: "ltr",
                                          display: "inline-block",
                                          verticalAlign: "top",
                                          width: "100%",
                                        }}
                                      >
                                        <table
                                          border={0}
                                          cellPadding={0}
                                          cellSpacing={0}
                                          role="presentation"
                                          style={{ verticalAlign: "top" }}
                                          width="100%"
                                        >
                                          <tbody>
                                            <tr>
                                              <td
                                                align="left"
                                                style={{
                                                  fontSize: 0,
                                                  padding: "28px 16px 0 16px",
                                                  wordBreak: "break-word",
                                                }}
                                              >
                                                <div
                                                  style={{
                                                    fontFamily:
                                                      "Ubuntu, Helvetica, Arial, sans-serif",
                                                    fontSize: 12,
                                                    lineHeight: 1,
                                                    textAlign: "left",
                                                    color: "#334155",
                                                  }}
                                                >
                                                  LINE ITEMS PROCURED
                                                </div>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td
                                                align="left"
                                                style={{
                                                  fontSize: 0,
                                                  padding: "8px 16px 0 16px",
                                                  wordBreak: "break-word",
                                                }}
                                              >
                                                <div
                                                  style={{
                                                    fontFamily:
                                                      "Ubuntu, Helvetica, Arial, sans-serif",
                                                    fontSize: 24,
                                                    fontWeight: 700,
                                                    lineHeight: 1,
                                                    textAlign: "left",
                                                    color: "#000000",
                                                  }}
                                                >
                                                  {data4}
                                                </div>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </div>
                                      {/*[if mso | IE]></td></tr></table><![endif]*/}
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            {/*[if mso | IE]></td></tr></table><![endif]*/}
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              fontSize: 0,
                              padding: "0px 0 0 0",
                              wordBreak: "break-word",
                            }}
                          >
                            {/*[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]*/}
                            <div style={{ margin: "0px auto", maxWidth: 600 }}>
                              <table
                                align="center"
                                border={0}
                                cellPadding={0}
                                cellSpacing={0}
                                role="presentation"
                                style={{ width: "100%" }}
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      style={{
                                        direction: "ltr",
                                        fontSize: 0,
                                        padding: "0px 0 0 0",
                                        textAlign: "center",
                                      }}
                                    >
                                      {/*[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:300px;" ><![endif]*/}
                                      <div
                                        className="mj-column-px-300 mj-outlook-group-fix"
                                        style={{
                                          fontSize: 0,
                                          textAlign: "left",
                                          direction: "ltr",
                                          display: "inline-block",
                                          verticalAlign: "top",
                                          width: "100%",
                                        }}
                                      >
                                        <table
                                          border={0}
                                          cellPadding={0}
                                          cellSpacing={0}
                                          role="presentation"
                                          style={{ verticalAlign: "top" }}
                                          width="100%"
                                        >
                                          <tbody>
                                            <tr>
                                              <td
                                                align="left"
                                                style={{
                                                  fontSize: 0,
                                                  padding: "28px 0 0 16px",
                                                  wordBreak: "break-word",
                                                }}
                                              >
                                                <div
                                                  style={{
                                                    fontFamily:
                                                      "Ubuntu, Helvetica, Arial, sans-serif",
                                                    fontSize: 12,
                                                    lineHeight: 1,
                                                    textAlign: "left",
                                                    color: "#334155",
                                                  }}
                                                >
                                                  NEW SUPPLIERS ENGAGED
                                                </div>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td
                                                align="left"
                                                style={{
                                                  fontSize: 0,
                                                  padding: "8px 0 0 16px",
                                                  wordBreak: "break-word",
                                                }}
                                              >
                                                <div
                                                  style={{
                                                    fontFamily:
                                                      "Ubuntu, Helvetica, Arial, sans-serif",
                                                    fontSize: 24,
                                                    fontWeight: 700,
                                                    lineHeight: 1,
                                                    textAlign: "left",
                                                    color: "#000000",
                                                  }}
                                                >
                                                  {data5}
                                                </div>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </div>
                                      {/*[if mso | IE]></td><td class="" style="vertical-align:top;width:300px;" ><![endif]*/}
                                      <div
                                        className="mj-column-px-300 mj-outlook-group-fix"
                                        style={{
                                          fontSize: 0,
                                          textAlign: "left",
                                          direction: "ltr",
                                          display: "inline-block",
                                          verticalAlign: "top",
                                          width: "100%",
                                        }}
                                      >
                                        <table
                                          border={0}
                                          cellPadding={0}
                                          cellSpacing={0}
                                          role="presentation"
                                          style={{ verticalAlign: "top" }}
                                          width="100%"
                                        >
                                          <tbody>
                                            <tr>
                                              <td
                                                align="left"
                                                style={{
                                                  fontSize: 0,
                                                  padding: "28px 16px 0 16px",
                                                  wordBreak: "break-word",
                                                }}
                                              >
                                                <div
                                                  style={{
                                                    fontFamily:
                                                      "Ubuntu, Helvetica, Arial, sans-serif",
                                                    fontSize: 12,
                                                    lineHeight: 1,
                                                    textAlign: "left",
                                                    color: "#334155",
                                                  }}
                                                >
                                                  SUPPLIER PARTICIPATION
                                                </div>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td
                                                align="left"
                                                style={{
                                                  fontSize: 0,
                                                  padding: "8px 16px 0 16px",
                                                  wordBreak: "break-word",
                                                }}
                                              >
                                                <div
                                                  style={{
                                                    fontFamily:
                                                      "Ubuntu, Helvetica, Arial, sans-serif",
                                                    fontSize: 24,
                                                    fontWeight: 700,
                                                    lineHeight: 1,
                                                    textAlign: "left",
                                                    color: "#000000",
                                                  }}
                                                >
                                                  {data6}
                                                </div>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </div>
                                      {/*[if mso | IE]></td></tr></table><![endif]*/}
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            {/*[if mso | IE]></td></tr></table><![endif]*/}
                          </td>
                        </tr>
                        <tr>
                          <td
                            align="left"
                            style={{
                              fontSize: 0,
                              padding: "24px 0 0 16px",
                              wordBreak: "break-word",
                            }}
                          >
                            <div
                              style={{
                                fontFamily:
                                  "Ubuntu, Helvetica, Arial, sans-serif",
                                fontSize: 12,
                                textAlign: "left",
                                color: "#64748B",
                              }}
                            >
                              Savings are being calculated against the lowest
                              initial bid in case of reverse events (Buy) and
                              highest initial bid in case of forward events
                              (Sell)
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td
                            align="center"
                            style={{
                              fontSize: 0,
                              padding: "32px 16px 16px 16px",
                              wordBreak: "break-word",
                            }}
                          >
                            <p
                              style={{
                                borderTop: "solid 1px #E2E8F0",
                                fontSize: 1,
                                margin: "0px auto",
                                width: "100%",
                              }}
                            ></p>
                            {/*[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" style="border-top:solid 1px #E2E8F0;font-size:1px;margin:0px auto;width:568px;" role="presentation" width="568px" ><tr><td style="height:0;line-height:0;"> &nbsp;
</td></tr></table><![endif]*/}
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              fontSize: 0,
                              padding: "0 16px 0 16px",
                              wordBreak: "break-word",
                            }}
                          >
                            {/*[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" bgcolor="#F8FAFC" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]*/}
                            <div
                              style={{
                                background: "#F8FAFC",
                                backgroundColor: "#F8FAFC",
                                margin: "0px auto",
                                maxWidth: 600,
                              }}
                            >
                              <table
                                align="center"
                                border={0}
                                cellPadding={0}
                                cellSpacing={0}
                                role="presentation"
                                style={{
                                  background: "#F8FAFC",
                                  backgroundColor: "#F8FAFC",
                                  width: "100%",
                                }}
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      style={{
                                        direction: "ltr",
                                        fontSize: 0,
                                        padding: "0 16px 0 16px",
                                        textAlign: "center",
                                      }}
                                    >
                                      {/*[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:middle;width:284px;" ><![endif]*/}
                                      <div
                                        className="mj-column-per-50 mj-outlook-group-fix"
                                        style={{
                                          fontSize: 0,
                                          textAlign: "left",
                                          direction: "ltr",
                                          display: "inline-block",
                                          verticalAlign: "middle",
                                          width: "100%",
                                        }}
                                      >
                                        <table
                                          border={0}
                                          cellPadding={0}
                                          cellSpacing={0}
                                          role="presentation"
                                          style={{ verticalAlign: "middle" }}
                                          width="100%"
                                        >
                                          <tbody>
                                            <tr>
                                              <td
                                                align="left"
                                                style={{
                                                  fontSize: 0,
                                                  padding: "0px 16px 0px 16px",
                                                  wordBreak: "break-word",
                                                }}
                                              >
                                                <table
                                                  border={0}
                                                  cellPadding={0}
                                                  cellSpacing={0}
                                                  role="presentation"
                                                  style={{
                                                    borderCollapse: "collapse",
                                                    borderSpacing: 0,
                                                  }}
                                                >
                                                  <tbody>
                                                    <tr>
                                                      <td
                                                        style={{ width: 142 }}
                                                      >
                                                        <a
                                                          href="https://www.procol.io/"
                                                          target="_blank"
                                                        >
                                                          <img
                                                            height={40}
                                                            src="https://i.ibb.co/mzyntfD/Frame-61.png"
                                                            style={{
                                                              border: 0,
                                                              display: "block",
                                                              outline: "none",
                                                              textDecoration:
                                                                "none",
                                                              height: 40,
                                                              width: "100%",
                                                              fontSize: 13,
                                                            }}
                                                            width={142}
                                                          />
                                                        </a>
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </div>
                                      {/*[if mso | IE]></td><td class="" style="vertical-align:middle;width:284px;" ><![endif]*/}
                                      <div
                                        className="mj-column-per-50 mj-outlook-group-fix"
                                        style={{
                                          fontSize: 0,
                                          lineHeight: 0,
                                          textAlign: "left",
                                          display: "inline-block",
                                          width: "100%",
                                          direction: "ltr",
                                          verticalAlign: "middle",
                                        }}
                                      >
                                        {/*[if mso | IE]><table border="0" cellpadding="0" cellspacing="0" role="presentation" ><tr><td style="vertical-align:middle;width:142px;" ><![endif]*/}
                                        <div
                                          className="mj-column-per-50 mj-outlook-group-fix"
                                          style={{
                                            fontSize: 0,
                                            textAlign: "left",
                                            direction: "ltr",
                                            display: "inline-block",
                                            verticalAlign: "middle",
                                            width: "50%",
                                          }}
                                        >
                                          <table
                                            border={0}
                                            cellPadding={0}
                                            cellSpacing={0}
                                            role="presentation"
                                            style={{ verticalAlign: "middle" }}
                                            width="100%"
                                          >
                                            <tbody>
                                              <tr>
                                                <td
                                                  align="left"
                                                  style={{
                                                    fontSize: 0,
                                                    padding:
                                                      "16px 16px 16px 16px",
                                                    wordBreak: "break-word",
                                                  }}
                                                >
                                                  <table
                                                    border={0}
                                                    cellPadding={0}
                                                    cellSpacing={0}
                                                    role="presentation"
                                                    style={{
                                                      borderCollapse:
                                                        "collapse",
                                                      borderSpacing: 0,
                                                    }}
                                                  >
                                                    <tbody>
                                                      <tr>
                                                        <td
                                                          style={{ width: 110 }}
                                                        >
                                                          <a
                                                            href="https://apps.apple.com/in/app/procol-bid/id1464600155"
                                                            target="_blank"
                                                          >
                                                            <img
                                                              height="auto"
                                                              src="https://i.ibb.co/d6TbWL7/Mobile-app-store-badge.png"
                                                              style={{
                                                                border: 0,
                                                                display:
                                                                  "block",
                                                                outline: "none",
                                                                textDecoration:
                                                                  "none",
                                                                height: "auto",
                                                                width: "100%",
                                                                fontSize: 13,
                                                              }}
                                                              width={110}
                                                            />
                                                          </a>
                                                        </td>
                                                      </tr>
                                                    </tbody>
                                                  </table>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </div>
                                        {/*[if mso | IE]></td><td style="vertical-align:middle;width:142px;" ><![endif]*/}
                                        <div
                                          className="mj-column-per-50 mj-outlook-group-fix"
                                          style={{
                                            fontSize: 0,
                                            textAlign: "left",
                                            direction: "ltr",
                                            display: "inline-block",
                                            verticalAlign: "middle",
                                            width: "50%",
                                          }}
                                        >
                                          <table
                                            border={0}
                                            cellPadding={0}
                                            cellSpacing={0}
                                            role="presentation"
                                            style={{ verticalAlign: "middle" }}
                                            width="100%"
                                          >
                                            <tbody>
                                              <tr>
                                                <td
                                                  align="left"
                                                  style={{
                                                    fontSize: 0,
                                                    padding:
                                                      "16px 16px 16px 16px",
                                                    wordBreak: "break-word",
                                                  }}
                                                >
                                                  <table
                                                    border={0}
                                                    cellPadding={0}
                                                    cellSpacing={0}
                                                    role="presentation"
                                                    style={{
                                                      borderCollapse:
                                                        "collapse",
                                                      borderSpacing: 0,
                                                    }}
                                                  >
                                                    <tbody>
                                                      <tr>
                                                        <td
                                                          style={{ width: 110 }}
                                                        >
                                                          <a
                                                            href="https://play.google.com/store/apps/details?id=com.procol.bid"
                                                            target="_blank"
                                                          >
                                                            <img
                                                              height="auto"
                                                              src="https://i.ibb.co/R7p6L7w/Mobile-app-store-badge-1.png"
                                                              style={{
                                                                border: 0,
                                                                display:
                                                                  "block",
                                                                outline: "none",
                                                                textDecoration:
                                                                  "none",
                                                                height: "auto",
                                                                width: "100%",
                                                                fontSize: 13,
                                                              }}
                                                              width={110}
                                                            />
                                                          </a>
                                                        </td>
                                                      </tr>
                                                    </tbody>
                                                  </table>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </div>
                                        {/*[if mso | IE]></td></tr></table><![endif]*/}
                                      </div>
                                      {/*[if mso | IE]></td></tr></table><![endif]*/}
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            {/*[if mso | IE]></td></tr></table><![endif]*/}
                          </td>
                        </tr>
                        <tr>
                          <td style={{ fontSize: 0, wordBreak: "break-word" }}>
                            <div style={{ height: 36, lineHeight: 36 }}> </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  {/*[if mso | IE]></td></tr></table><![endif]*/}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/*[if mso | IE]></td></tr></table><![endif]*/}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1 style={{ textAlign: "left" }}>Enter Details</h1>
        <div style={{ display: "flex" }}>
          <span>Procurement Spent</span>
          <input
            type="text"
            label="ge"
            style={{ width: 100, marginLeft: 10 }}
            onChange={handleData}
          />
        </div>
        <div style={{ display: "flex" }}>
          <span>Total Savings</span>
          <input
            type="text"
            label="ge"
            style={{ width: 100, marginLeft: 10 }}
            onChange={handleData1}
          />
        </div>
        <div style={{ display: "flex" }}>
          <span>Total Savings %</span>
          <input
            type="text"
            label="ge"
            style={{ width: 100, marginLeft: 10 }}
            onChange={handleData2}
          />
        </div>
        <div style={{ display: "flex" }}>
          <span>Events Run</span>
          <input
            type="text"
            label="ge"
            style={{ width: 100, marginLeft: 10 }}
            onChange={handleData3}
          />
        </div>
        <div style={{ display: "flex" }}>
          <span>Line Items Procured</span>
          <input
            type="text"
            label="ge"
            style={{ width: 100, marginLeft: 10 }}
            onChange={handleData4}
          />
        </div>
        <div style={{ display: "flex" }}>
          <span>New Suppliers Engaged</span>
          <input
            type="text"
            label="ge"
            style={{ width: 100, marginLeft: 10 }}
            onChange={handleData5}
          />
        </div>

        <div style={{ display: "flex" }}>
          <span>Supplier participation</span>
          <input
            type="text"
            label="ge"
            style={{ width: 100, marginLeft: 10 }}
            onChange={handleData6}
          />
        </div>
      </div>
    </>
  );
}

export default App;
