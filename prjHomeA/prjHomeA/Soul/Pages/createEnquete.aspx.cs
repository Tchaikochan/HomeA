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

            if (Request["e"] == null)
            {
                return;

            }

            if (Request["e"].ToString() == "")
            {
                return;

            }

            if (Request["a"] == null)
            {
                return;

            }

            if (Request["a"].ToString() == "")
            {
                return;

            }

            if (Request["v"] == null)
            {
                return;

            }

            if (Request["v"].ToString() == "")
            {
                return;

            }

            string InserTitle = Request["t"].ToString();
            string InserDS = Request["s"].ToString();
            string[] InserEnq = Request["e"].ToString().Split('^');
            string[] InserEren = Request["a"].ToString().Split('^');
            string[] InserArmin = Request["v"].ToString().Split('^');
            DataBase Banco = new DataBase();
            Banco.openBar("localhost", "root", "root", "HomeA");
            Banco.getCommand("SELECT * FROM Enquete");
            while (Banco.Selected.Read())
            {
                CodeEnquete++;
                
            }

            string Ronaldo;
            string Perg;
            Banco.Refresh();

            Banco.openBar();
            Banco.setCommand("INSERT INTO Enquete values ('" + InserTitle + "','" + InserDS + "',DATE_FORMAT(CURRENT_DATE(), '%Y/%m/%d' ),"+ CodeEnquete +");");

            Banco.Refresh();

            for (int i = 0; i < InserEren.Length; i++)
			{

                Banco.openBar();

                Ronaldo = InserEren[i].Substring(InserEren[i].IndexOf('¨') + 1);
                Perg = InserEren[i].Substring(0, InserEren[i].IndexOf('¨'));
			    Banco.setCommand("INSERT INTO Pergunta values('" + Perg + "'," + Ronaldo + "," + CodeEnquete + ");");
                for (int C = 0; C < InserEnq.Length; C++)
                {
                    Banco.openBar();
                    string Fenomeno = InserEnq[i].Substring(12,2).Replace("-","");
                    string Gaucho = InserEnq[i].Substring(14, 1).Replace("-", "");
                    if (Ronaldo == Fenomeno)
                    {
                        Banco.setCommand("INSERT INTO Alternativa values('" + Gaucho + "','" + InserArmin[i] + "'," + Ronaldo + "," + CodeEnquete + ");");

                    }

                    Banco.Refresh();

                }

                Banco.Refresh();
 
			}

            Banco.Refresh();
            Response.Write(InserTitle);
        }
    }
}