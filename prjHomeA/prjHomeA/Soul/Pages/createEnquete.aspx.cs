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
            int CodeEnquete = 0;

            if (Request["t"] == null)
            {
                return;
                
            }

            if (Request["t"].ToString() == "")
            {
                return;

            }

            if (Request["s"] == null)
            {
                return;

            }

            if (Request["s"].ToString() == "")
            {
                return;

            }

            string InserTitle = Request["t"].ToString();
            string InserDS = Request["s"].ToString();
            DataBase Banco = new DataBase();
            Banco.openBar("localhost", "root", "root", "HomeA");
            Banco.getCommand("SELECT * FROM Enquete");
            while (Banco.Selected.Read())
            {
                CodeEnquete++;
                
            }

            Banco.Refresh();

            Banco.openBar();
            Banco.setCommand("INSERT INTO Enquete values ('" + InserTitle + "','" + InserDS + "',DATE_FORMAT(CURRENT_DATE(), '%Y/%m/%d' ),"+ CodeEnquete +");");

            Banco.Refresh();
            Response.Write(InserTitle);
        }
    }
}