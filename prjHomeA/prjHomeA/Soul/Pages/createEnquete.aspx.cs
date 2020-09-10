using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using MySql.Data.MySqlClient;

namespace prjHomeA.Soul.Pages
{
    public partial class createEnquete : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Request["t"] == null)
            {
                Response.Write("ERROU!");
                
            }

            if (Request["t"].ToString() == "")
            {
                Response.Write("ERROU!");

            }

            string InserTitle = Request["t"].ToString();
            DataBase Banco = new DataBase();
            Banco.openBar("localhost", "root", "root", "HomeA");
            Banco.setCommand("INSERT INTO Enquete values ('" + InserTitle + "',DATE_FORMAT(CURRENT_DATE(), '%Y/%m/%d' ),2);");

            Banco.Refresh();
            Response.Write(InserTitle);
        }
    }
}